from django.db import models

class Acopio(models.Model):
    idAcopio = models.AutoField(primary_key = True)
    codAcopio = models.CharField('Código', max_length = 10)
    nomAcopio = models.CharField('Acopio', max_length = 200)
    resguAcopio = models.CharField('Resguardo', max_length = 100)
    muniAcopio = models.CharField('Municipio', max_length = 100)
    estado = models.BooleanField('Estado', default = True)
    fecha_creacion = models.DateField('Fecha Creación del Acopio', auto_now = True, auto_now_add = False)

    class Meta:
        verbose_name = 'Acopio'
        verbose_name_plural = 'Acopios'
        ordering = ['idAcopio']

    def __str__(self):
        return '{0},{1}'.format(self.codAcopio,self.nomAcopio)
        #return '%s,%s' % (self.nomAcopio, self.resguAcopio)

class Rol(models.Model):
    idRol = models.AutoField(primary_key = True)
    nomRol = models.CharField('Rol', max_length = 15)
    estado = models.BooleanField('Estado', default = True)
    fecha_creacion = models.DateField('Fecha Creación del Rol', auto_now = True, auto_now_add = False)

    class Meta:
        verbose_name = 'Rol'
        verbose_name_plural = 'Roles'
        ordering = ['idRol']

    def __str__(self):
        return self.nomRol

class Persona(models.Model):
    fotoPer = models.ImageField(upload_to = None , height_field = None , width_field = None , max_length = 100)
    idDocu = models.BigIntegerField('Identificacón', primary_key = True)
    codPer = models.CharField('Código', max_length = 20, blank = False, null = False)
    nomPer = models.CharField('Nombre', max_length = 200, blank = False, null = False)
    apePer = models.CharField('Apellido', max_length = 200, blank = False, null = False)
    telPer = models.CharField('Teléfono', max_length = 12, blank = False, null = False)
    correoPer = models.EmailField('Correo', max_length = 45, blank = False, null = False)
    muniPer = models.CharField('Municipio', max_length = 100, blank = False, null = False)
    verePer = models.CharField('Vereda', max_length = 100, blank = False, null = False)
    resguPer = models.CharField('Resguardo', max_length = 100, blank = False, null = False)
    fincaPer = models.CharField('Finca', max_length = 200, blank = False, null = False)
    acopio_id = models.ForeignKey(Acopio, on_delete = models.CASCADE)
    rol_id = models.ForeignKey(Rol, on_delete = models.CASCADE)
    estado = models.BooleanField('Estado', default = True)
    fecha_creacion = models.DateField('Fecha Creación de la Persona', auto_now = True, auto_now_add = False)

    class Meta:
        verbose_name = 'Persona'
        verbose_name_plural = 'Personas'
        ordering = ['codPer']

    def __str__(self):
        return '%s,%s' % (self.apePer, self.nomPer)

class Recurso(models.Model):
    idRec = models.AutoField(primary_key = True)
    valorRec = models.IntegerField('Valor Recurso')
    fechaRec = models.DateField ( 'Fecha', auto_now = True , auto_now_add = False)
    numFac = models.CharField('Factura N°', max_length = 100)
    codRec = models.CharField('Código', max_length = 15)
    numCheque = models.CharField('Cheque N°', max_length = 30)
    numCuenta = models.CharField('Cuenta N°', max_length = 20)
    detCuenta = models.TextField('Detalle Cuenta', blank = False, null = False)
    comprobante = models.ImageField(upload_to = None , height_field = None , width_field = None , max_length = 100 , null = True)
    acopio_id = models.ForeignKey(Acopio, on_delete = models.CASCADE)
    estado = models.BooleanField('Estado', default = True)
    fecha_creacion = models.DateField('Fecha Creación del Recurso', auto_now = True, auto_now_add = False)

    class Meta:
        verbose_name = 'Recurso'
        verbose_name_plural = 'Recursos'
        ordering = ['fechaRec']

    def __str__(self):
        return '%s,%s,' % (self.fechaRec, self.valorRec)

class Jornal(models.Model):
    idJornal = models.AutoField(primary_key = True)
    fechaJornal = models.DateField(auto_now = False , auto_now_add = False)
    horaIni = models.TimeField(auto_now = False , auto_now_add = False )
    horaFin = models.TimeField(auto_now = False , auto_now_add = False )
    valorHora = models.IntegerField('Valor por Hora')
    detJornal = models.TextField('Detalle del Jornal', max_length = 500)
    idenPer = models.ForeignKey(Persona, on_delete = models.CASCADE)
    estado = models.BooleanField('Estado', default = True)
    fecha_creacion = models.DateField('Fecha Creación del Jornal', auto_now = True, auto_now_add = False)

    class Meta:
        verbose_name = 'Jornal'
        verbose_name_plural = 'Jornales'
        ordering = ['idJornal']

    def __str__(self):
        return '{0},{1}'.format(self.nomJornal, self.fechaJornal)

class Gastos(models.Model):
    idGasto = models.AutoField(primary_key = True)
    item = models.CharField('Item', max_length = 35, blank = False, null = False)
    cantidad = models.IntegerField('Cantidad')
    comprobanteGastos = models.ImageField(upload_to = None , height_field = None , width_field = None , max_length = 100 , null = True)
    descripcionG = models.TextField('Descripción del Gasto', max_length = 500)
    jornalId = models.ForeignKey(Jornal, on_delete = models.CASCADE)
    fecha_gasto = models.DateField('Fecha de Creación del Gasto', auto_now = True, auto_now_add = False)


class Venta(models.Model):
    idVenta = models.AutoField(primary_key = True)
    codFactu = models.CharField('Código', max_length = 20)
    numKilos = models.IntegerField('N° Kilos')
    precioKilo = models.IntegerField('Valor Kilo')
    fechaVenta = models.DateField(auto_now = True , auto_now_add = False )
    tipoCafe = models.CharField('Tipo de Café', max_length = 3)
    comproVenta = models.ImageField(upload_to = None , height_field = None , width_field = None , max_length = 100 , null = True)
    Persona_id = models.ForeignKey(Persona, on_delete = models.CASCADE)
    estado = models.BooleanField('Estado', default = True)
    fecha_creacion = models.DateField('Fecha Creación de la Venta', auto_now = True, auto_now_add = False)

    class Meta:
        verbose_name = 'Venta'
        verbose_name_plural = 'Ventas'
        ordering = ['fechaVenta']

    def __str__(self):
        return '%s,%s' % (self.fechaVenta, self.numKilos)

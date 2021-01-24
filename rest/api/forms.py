from django import forms
from .models import Acopio,Rol,Persona,Recurso,Jornal,Venta,Gastos

class AcopioForm(forms.ModelForm):
    class Meta:
        model = Acopio
        fields = (
            'codAcopio',
            'nomAcopio',
            'resguAcopio',
            'muniAcopio',
        )
        labels = {
            'codAcopio': 'Código',
            'nomAcopio': 'Nombre',
            'resguAcopio': 'Resguardo',
            'muniAcopio': 'Municipio',
        }
        widgets = {
            'codAcopio': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder': 'Ingrese el código del Acopio',
                }
            ),
            'nomAcopio': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el nombre del Acopio',
                }
            ),
            'resguAcopio': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el Resguardo del Acopio'
                }
            ),

        }

class RolForm(forms.ModelForm):
    class Meta:
        model = Rol
        fields = (
            'nomRol',
        )
        labels = {
            'nomRol': 'Rol',
        }
        widgets = {
            'nomRol': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el nombre del Rol',
                }
            ),
        }

class PersonaForm(forms.ModelForm):
    class Meta:
        model = Persona
        fields = (
            'fotoPer',
            'idDocu',
            'codPer',
            'nomPer',
            'apePer',
            'telPer',
            'correoPer',
            'muniPer',
            'verePer',
            'resguPer',
            'fincaPer',
            'acopio_id',
            'rol_id',
        )
        labels = {
            'fotoPer': 'Foto',
            'idDocu': 'Identificación',
            'codPer': 'Código',
            'nomPer': 'Nombre',
            'apePer': 'Apellido',
            'telPer': 'Teléfono',
            'correoPer': 'Correo',
            'muniPer': 'Municipio',
            'verePer': 'Vereda',
            'resguPer': 'Resguardo',
            'fincaPer': 'Finca',
            'acopio_id': 'Acopio',
            'rol_id': 'Rol',
        }
        widgets = {
            'fotoPer': forms.FileInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese una fotografia',
                }
            ),
            'idDocu':forms.TextInput(
                attrs = {
                'class':'form-control',
                'placeholder':'Ingrese el número de Identificación',
                }
            ),
            'codPer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder': 'Ingrese el código de la Persona',
                }
            ),
            'nomPer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el nombre de la Persona',
                }
            ),
            'apePer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el apellido de la Persona'
                }
            ),
            'telPer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese un teléfono ',
                }
            ),
            'correoPer': forms.EmailInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese un correo válido',
                }
            ),
            'muniPer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese nombre del Municipio'
                }
            ),
            'verePer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese nombre de la Vereda'
                }
            ),
            'resguPer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese nombre del Resguardo'
                }
            ),
            'fincaPer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el nombre de la Finca',
                }
            ),
            'acopio_id': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccióne el Acopio al que pertenece la Persona',
                }
            ),
            'rol_id': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccione el Rol de la Persona',
                }
            ),

        }

class RecursoForm(forms.ModelForm):
    class Meta:
        model = Recurso
        fields = (
            'valorRec',
            'numFac',
            'codRec',
            'numCheque',
            'numCuenta',
            'detCuenta',
            'comprobante',
            'acopio_id',
        )
        labels = {
            'valorRec':'Valor',
            'numFac':'N° de Factura',
            'codRec':'Cod Recurso',
            'numCheque':'N° de Cheque',
            'numCuenta':'N° de Cuenta',
            'detCuenta':'Detalle de Cuenta',
            'comprobante':'Adjuntar Comprobante',
            'acopio_id':'Acopio',
        }
        widgets = {
            'valorRec': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el monto del Recurso',
                }
            ),
            'numFac': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el número de la Factura',
                }
            ),
            'codRec': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el Código del Recurso',
                }
            ),
            'numCheque': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el N° del Cheque',
                }
            ),
            'numCuenta': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el N° de la Cuenta',
                }
            ),
            'detCuenta': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese una pequeña descripción del Recurso',
                }
            ),
            'comprobante': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Adjuntar Comprobante',
                }
            ),
            'acopio_id': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccióne el Acopio al que se entrega el Recurso',
                }
            ),
        }

class JornalForm(forms.ModelForm):
    class Meta:
        model = Jornal
        fields = (
            'fechaJornal',
            'horaIni',
            'horaFin',
            'valorHora',
            'detJornal',
            'idenPer',
        )
        labels = {
            'fechaJornal':'Fecha del Jornal',
            'horaIni':'Hora de Inicio',
            'horaFin':'Hora de Finalización',
            'valorHora':'Valor por Hora',
            'detJornal':'Detalle del Jornal',
            'idenPer':'Identificación del Jornalero',
        }
        widgets = {
            'fechaJornal': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccióne la fecha del Jornal',
                }
            ),
            'horaIni': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccióne la hora de Inicio del Jornal',
                }
            ),
            'horaFin': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccióne la hora de Finalización del Jornal',
                }
            ),
            'valorHora': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el Valor por hora de Trabajo',
                }
            ),
            'detJornal': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Escriba una pequeña descripción del Jornal',
                }
            ),
            'idenPer': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccióne la identificación del Trabajador',
                }
            ),
        }

class GastosForm(forms.ModelForm):
    class Meta:
        model = Gastos
        fields = (
            'item',
            'cantidad',
            'comprobanteGastos',
            'descripcionG',
        )
        labels = {
            'item':'Item',
            'cantidad':'Cantidad',
            'comprobanteGastos':'Adjuntar Factura',
            'descripcionG':'Descripción del Gasto',
        }
        widgets = {
            'item': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el Item',
                }
            ),
            'cantidad': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese la cantidad',
                }
            ),
            'comprobanteGastos': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccione el comprobante del Gasto',
                }
            ),
            'descripcionG': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Escriba una pequeña descripción del gasto generado',
                }
            ),
        }

class VentaForm(forms.ModelForm):
    class Meta:
        model = Venta
        fields = (
            'codFactu',
            'numKilos',
            'precioKilo',
            'tipoCafe',
            'comproVenta',
            'Persona_id',
        )
        labels = {
            'codFactu':'Código Factura',
            'numKilos':'N° de Kilos',
            'precioKilo':'Precio por Kilo',
            'tipoCafe':'Tipo de Café',
            'comproVenta':'Adjuntar Comprobante',
            'Persona_id':'Identificación del Vendedor',
        }
        widgets = {
            'codFactu': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el código de la Factura',
                }
            ),
            'numKilos': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese la cantidadde Kilos',
                }
            ),
            'precioKilo': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Ingrese el valor por Kilo',
                }
            ),
            'tipoCafe': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccióne el tipo de Café',
                }
            ),
            'comproVenta': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccione el comprobante de la Venta',
                }
            ),
            'Persona_id': forms.TextInput(
                attrs = {
                    'class':'form-control',
                    'placeholder':'Seleccióne la identificación del Vendedor',
                }
            ),
        }

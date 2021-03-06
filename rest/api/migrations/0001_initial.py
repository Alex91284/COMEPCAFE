# Generated by Django 3.0.3 on 2020-04-04 01:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Acopio',
            fields=[
                ('idAcopio', models.AutoField(primary_key=True, serialize=False)),
                ('codAcopio', models.CharField(max_length=10, verbose_name='Código')),
                ('nomAcopio', models.CharField(max_length=200, verbose_name='Acopio')),
                ('resguAcopio', models.CharField(max_length=100, verbose_name='Resguardo')),
                ('muniAcopio', models.CharField(max_length=100, verbose_name='Municipio')),
            ],
            options={
                'verbose_name': 'Acopio',
                'verbose_name_plural': 'Acopios',
                'ordering': ['idAcopio'],
            },
        ),
        migrations.CreateModel(
            name='Persona',
            fields=[
                ('fotoPer', models.ImageField(upload_to=None)),
                ('idDocu', models.BigIntegerField(primary_key=True, serialize=False, verbose_name='Identificacón')),
                ('codPer', models.CharField(max_length=20, verbose_name='Código')),
                ('nomPer', models.CharField(max_length=200, verbose_name='Nombre')),
                ('apePer', models.CharField(max_length=200, verbose_name='Apellido')),
                ('telPer', models.CharField(max_length=12, verbose_name='Teléfono')),
                ('correoPer', models.EmailField(max_length=45, verbose_name='Correo')),
                ('muniPer', models.CharField(max_length=100, verbose_name='Municipio')),
                ('verePer', models.CharField(max_length=100, verbose_name='Vereda')),
                ('resguPer', models.CharField(max_length=100, verbose_name='Resguardo')),
                ('fincaPer', models.CharField(max_length=200, verbose_name='Finca')),
                ('fecha_creacion', models.DateField(auto_now=True, verbose_name='Fecha Creación de la Persona')),
                ('acopio_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Acopio')),
            ],
            options={
                'verbose_name': 'Persona',
                'verbose_name_plural': 'Personas',
                'ordering': ['codPer'],
            },
        ),
        migrations.CreateModel(
            name='Rol',
            fields=[
                ('idRol', models.AutoField(primary_key=True, serialize=False)),
                ('nomRol', models.CharField(max_length=15, verbose_name='Rol')),
            ],
            options={
                'verbose_name': 'Rol',
                'verbose_name_plural': 'Roles',
                'ordering': ['idRol'],
            },
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('idVenta', models.AutoField(primary_key=True, serialize=False)),
                ('codFactu', models.CharField(max_length=20, verbose_name='Código')),
                ('numKilos', models.IntegerField(verbose_name='N° Kilos')),
                ('precioKilo', models.IntegerField(verbose_name='Valor Kilo')),
                ('fechaVenta', models.DateField(auto_now=True)),
                ('tipoCafe', models.CharField(max_length=3, verbose_name='Tipo de Café')),
                ('comproVenta', models.ImageField(upload_to=None)),
                ('idPersona', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Persona')),
            ],
            options={
                'verbose_name': 'Venta',
                'verbose_name_plural': 'Ventas',
                'ordering': ['fechaVenta'],
            },
        ),
        migrations.CreateModel(
            name='Recurso',
            fields=[
                ('idRec', models.AutoField(primary_key=True, serialize=False)),
                ('valorRec', models.IntegerField(verbose_name='Valor Recurso')),
                ('fechaRec', models.DateField(auto_now=True, verbose_name='Fecha')),
                ('numFac', models.CharField(max_length=100, verbose_name='Factura N°')),
                ('codRec', models.CharField(max_length=15, verbose_name='Código')),
                ('numCheque', models.CharField(max_length=30, verbose_name='Cheque N°')),
                ('numCuenta', models.CharField(max_length=20, verbose_name='Cuenta N°')),
                ('detCuenta', models.TextField(verbose_name='Detalle Cuenta')),
                ('comprobante', models.ImageField(upload_to=None)),
                ('acopio_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Acopio')),
            ],
            options={
                'verbose_name': 'Recurso',
                'verbose_name_plural': 'Recursos',
                'ordering': ['fechaRec'],
            },
        ),
        migrations.AddField(
            model_name='persona',
            name='rol_id',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Rol'),
        ),
        migrations.CreateModel(
            name='Jornal',
            fields=[
                ('idJornal', models.AutoField(primary_key=True, serialize=False)),
                ('nomJornal', models.CharField(max_length=20, verbose_name='Actividad')),
                ('fechaJornal', models.DateField()),
                ('horaIni', models.TimeField()),
                ('horaFin', models.TimeField()),
                ('valorHora', models.IntegerField(verbose_name='Valor por Hora')),
                ('detJornal', models.TextField(max_length=500, verbose_name='Detalle del Jornal')),
                ('idenPer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Persona')),
            ],
            options={
                'verbose_name': 'Jornal',
                'verbose_name_plural': 'Jornales',
                'ordering': ['idJornal'],
            },
        ),
    ]

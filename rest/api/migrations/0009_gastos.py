# Generated by Django 3.0.3 on 2020-06-16 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_remove_jornal_nomjornal'),
    ]

    operations = [
        migrations.CreateModel(
            name='Gastos',
            fields=[
                ('idGasto', models.AutoField(primary_key=True, serialize=False)),
                ('item', models.CharField(max_length=35, verbose_name='Item')),
                ('cantidad', models.IntegerField(verbose_name='Cantidad')),
                ('comprobanteGastos', models.ImageField(null=True, upload_to=None)),
                ('descripcionG', models.TextField(max_length=500, verbose_name='Descripción del Gasto')),
                ('fecha_gasto', models.DateField(auto_now=True, verbose_name='Fecha de Creación del Gasto')),
            ],
        ),
    ]

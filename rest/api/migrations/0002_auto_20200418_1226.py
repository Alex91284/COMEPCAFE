# Generated by Django 3.0.3 on 2020-04-18 17:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='jornal',
            old_name='idenPer',
            new_name='Persona_id',
        ),
        migrations.RenameField(
            model_name='venta',
            old_name='idPersona',
            new_name='Persona_id',
        ),
    ]

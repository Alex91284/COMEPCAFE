# Generated by Django 3.0.3 on 2020-04-23 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20200421_1005'),
    ]

    operations = [
        migrations.AddField(
            model_name='acopio',
            name='estado',
            field=models.BooleanField(default=True, verbose_name='Estado'),
        ),
        migrations.AddField(
            model_name='jornal',
            name='estado',
            field=models.BooleanField(default=True, verbose_name='Estado'),
        ),
        migrations.AddField(
            model_name='persona',
            name='estado',
            field=models.BooleanField(default=True, verbose_name='Estado'),
        ),
        migrations.AddField(
            model_name='recurso',
            name='estado',
            field=models.BooleanField(default=True, verbose_name='Estado'),
        ),
        migrations.AddField(
            model_name='rol',
            name='estado',
            field=models.BooleanField(default=True, verbose_name='Estado'),
        ),
        migrations.AddField(
            model_name='venta',
            name='estado',
            field=models.BooleanField(default=True, verbose_name='Estado'),
        ),
    ]

from rest_framework import serializers
from .models import Acopio,Rol,Persona,Recurso,Jornal,Venta,Gastos

class AcopioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Acopio
        fields = (
            'idAcopio',
            'codAcopio',
            'nomAcopio',
            'resguAcopio',
            'muniAcopio',
        )

class RolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rol
        fields = (
            'idRol',
            'nomRol',
        )

class PersonaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = (

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

class RecursoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recurso
        fields = (
            'idRec',
            'valorRec',
            'fechaRec',
            'numFac',
            'codRec',
            'numCheque',
            'numCuenta',
            'detCuenta',
            'comprobante',
            'acopio_id',
        )


class JornalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jornal
        fields = (
            'idJornal',
            'fechaJornal',
            'horaIni',
            'horaFin',
            'valorHora',
            'detJornal',
            'idenPer',
        )

class GastosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Gastos
        fields = (
            'idGasto',
            'item',
            'cantidad',
            'comprobanteGastos',
            'descripcionG',
        )

class VentaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Venta
        fields = (
            'idVenta',
            'codFactu',
            'numKilos',
            'precioKilo',
            'fechaVenta',
            'tipoCafe',
            'comproVenta',
            'Persona_id',
        )

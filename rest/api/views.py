from django.shortcuts import render
from rest_framework import generics
from django.utils.decorators import method_decorator #desde este import son para el login
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.generic.edit import FormView
from django.contrib.auth import login,logout,authenticate
from django.http import HttpResponseRedirect
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.authtoken.models import Token  #hasta aqui van las importaciones para hacer el login con autenticación
from .forms import AcopioForm,RolForm,PersonaForm,RecursoForm,JornalForm,GastosForm,VentaForm
from .models import Acopio,Rol,Persona,Recurso,Jornal,Gastos,Venta
from .serializers import AcopioSerializer,RolSerializer,PersonaSerializer,RecursoSerializer,JornalSerializer,GastosSerializer,VentaSerializer
from django.urls import reverse_lazy

class Login(FormView):
    template_name = ''
    form_class = AuthenticationForm
    success_url = reverse_lazy('')

    @method_decorator(csrf_protect)
    @method_decorator(never_cache)
    def dispatch(self,request,*args,**kwargs):
        if request.user.is_authenticated:
            return HttpResponseRedirect(self.get_success_url())
        else:
            return super(Login,self).dispatch(request,*args,*kwargs)

    def form_valid(self,form):
        user = authenticate(username = form.cleaned_data['username'], password = form.cleaned_data['password'])
        token,_ = Token.objects.get_or_create(user = user)
        if token:
            login(self.request, form.get_user())
            return super(Login,self).form_valid(form)

""" Metodos para listar los datos de la base de datos en un template """
class ListarAcopio(generics.ListAPIView):
    serializer_class = AcopioSerializer
    queryset = Acopio.objects.filter(estado = True)

class RolList(generics.ListAPIView):
    queryset = Rol.objects.filter(estado = True)
    serializer_class = RolSerializer

class PersonaList(generics.ListAPIView):
    queryset = Persona.objects.filter(estado = True)
    serializer_class = PersonaSerializer

class RecursoList(generics.ListAPIView):
    queryset = Recurso.objects.filter(estado = True)
    serializer_class = RecursoSerializer

class JornalList(generics.ListAPIView):
    queryset = Jornal.objects.filter(estado = True)
    serializer_class = JornalSerializer

class GastosList(generics.ListAPIView):
    queryset = Gastos.objects.all()
    serializer_class = GastosSerializer

class VentaList(generics.ListAPIView):
    queryset = Venta.objects.filter(estado = True)
    serializer_class = VentaSerializer

""" Metodos para listar por id los datos de la base de datos en un template """

class ListarAcopioID(generics.RetrieveAPIView):
    serializer_class = AcopioSerializer
    form_class = AcopioForm
    queryset = Acopio.objects.filter(estado = True)
    multiple_lookup_fields = ['pk', 'slug']

    def get_object(self):
        queryset = self.get_queryset()               # Obtener el conjunto de consultas base.
        filter = {}
        for field in self.multiple_lookup_fields:
            filter[field] = self.kwargs[field]

        obj = get_object_or_404(queryset, **filter)  # Buscar el objeto
        self.check_object_permissions(self.request, obj)
        return obj


""" Metodos para Actualizar los datos de la base de datos en un template """
class ActualizarAcopio(generics.RetrieveUpdateAPIView):
    serializer_class = AcopioSerializer
    queryset = Acopio.objects.filter(estado = True)

class ActualizarRol(generics.RetrieveUpdateAPIView):
    queryset = Rol.objects.filter(estado = True)
    serializer_class = RolSerializer

class ActualizarPersona(generics.RetrieveUpdateAPIView):
    queryset = Persona.objects.filter(estado = True)
    serializer_class = PersonaSerializer

class ActualizarRecurso(generics.RetrieveUpdateAPIView):
    queryset = Recurso.objects.filter(estado = True)
    serializer_class = RolSerializer

class ActualizarJornal(generics.RetrieveUpdateAPIView):
    queryset = Jornal.objects.filter(estado = True)
    serializer_class = JornalSerializer

class ActualizarGastos(generics.RetrieveUpdateAPIView):
    queryset = Gastos.objects.all()
    serializer_class = GastosSerializer

class ActualizarVenta(generics.RetrieveUpdateAPIView):
    queryset = Venta.objects.filter(estado = True)
    serializer_class = VentaSerializer

""" Metodos para Crear los datos de la base de datos en un template """
class CrearAcopio(generics.CreateAPIView):
    modelo = Acopio
    form_class = AcopioForm
    serializer_class = AcopioSerializer
    template_name = ''
    success_url = reverse_lazy('')

class CrearRol(generics.CreateAPIView):
    modelo = Rol
    form_class = RolForm
    serializer_class = RolSerializer
    template_name = ''
    success_url = reverse_lazy('')

class CrearPersona(generics.CreateAPIView):
    modelo = Persona
    form_class = PersonaForm
    serializer_class = PersonaSerializer
    template_name = ''
    success_url = reverse_lazy('')

class CrearRecurso(generics.CreateAPIView):
    modelo = Recurso
    form_class = RecursoForm
    serializer_class = RecursoSerializer
    template_name = ''
    success_url = reverse_lazy('')

class CrearJornal(generics.CreateAPIView):
    modelo = Jornal
    form_class = JornalForm
    serializer_class = JornalSerializer
    template_name = ''
    success_url = reverse_lazy('')

class CrearGastos(generics.CreateAPIView):
    modelo = Gastos
    form_class = GastosForm
    serializer_class = GastosSerializer
    template_name = ''
    success_url = reverse_lazy('')

class CrearVenta(generics.CreateAPIView):
    modelo = Venta
    form_class = VentaForm
    serializer_class = VentaSerializer
    template_name = ''
    success_url = reverse_lazy('')

""" Metodos para Eliminar los datos de la base de datos en un template """
class EliminarAcopio(generics.DestroyAPIView):
    queryset = Acopio.objects.filter(estado = True)
    modelo = Acopio
    serializer_class = AcopioSerializer

class EliminarRol(generics.DestroyAPIView):
    queryset = Rol.objects.filter(estado = True)
    modelo = Rol
    serializer_class = RolSerializer

class EliminarPersona(generics.DestroyAPIView):
    queryset = Persona.objects.filter(estado = True)
    modelo = Persona
    serializer_class = PersonaSerializer

class EliminarRecurso(generics.DestroyAPIView):
    queryset = Recurso.objects.filter(estado = True)
    modelo = Recurso
    serializer_class = RecursoSerializer

class EliminarJornal(generics.DestroyAPIView):
    queryset = Jornal.objects.filter(estado = True)
    modelo = Jornal
    serializer_class = JornalSerializer

class EliminarGastos(generics.DestroyAPIView):
    queryset = Gastos.objects.all()
    modelo = Gastos
    serializer_class = GastosSerializer

class EliminarVenta(generics.DestroyAPIView):
    queryset = Venta.objects.filter(estado = True)
    modelo = Venta
    serializer_class = VentaSerializer

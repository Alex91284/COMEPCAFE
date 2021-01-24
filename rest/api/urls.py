from django.urls import path
from .views import ListarAcopio, RolList, PersonaList, RecursoList, JornalList, GastosList, VentaList, ListarAcopioID, ActualizarAcopio, ActualizarRol, ActualizarPersona, ActualizarRecurso, ActualizarJornal, ActualizarGastos, ActualizarVenta, CrearAcopio, CrearRol, CrearPersona, CrearRecurso, CrearJornal, CrearGastos, CrearVenta, EliminarAcopio, EliminarRol, EliminarPersona, EliminarRecurso, EliminarJornal, EliminarGastos, EliminarVenta

urlpatterns = [
    # URLS para acopios
    path('acopio/',ListarAcopio.as_view(),name = 'listar_acopio'),
    path('acopioID/',ListarAcopioID.as_view(),name = 'acopio_id'),
    path('crear_acopio/',CrearAcopio.as_view(),name = 'crear_acopio'),
    path('editar_acopio/<int:pk>',ActualizarAcopio.as_view(),name = 'editar_acopio'),
    path('eliminar_acopio/<int:pk>',EliminarAcopio.as_view(),name = 'eliminar_acopio'),

    # URLS para Rol
    path('rol/',RolList.as_view(),name = 'rol_list'),
    path('crear_rol/',CrearRol.as_view(),name = 'crear_rol'),
    path('editar_rol/<int:pk>',ActualizarRol.as_view(),name = 'editar_rol'),
    path('eliminar_rol/<int:pk>',EliminarRol.as_view(),name = 'eliminar_rol'),

    # URLS para Persona
    path('persona/',PersonaList.as_view(),name = 'persona_list'),
    path('crear_persona/',CrearPersona.as_view(),name = 'crear_persona'),
    path('editar_persona/<int:pk>',ActualizarPersona.as_view(),name = 'editar_persona'),
    path('eliminar_persona/<int:pk>',EliminarPersona.as_view(),name = 'eliminar_persona'),

    # URLS para Recursos
    path('recurso/',RecursoList.as_view(),name = 'recurso_list'),
    path('crear_recurso/',CrearRecurso.as_view(),name = 'crear_recurso'),
    path('editar_recurso/<int:pk>',ActualizarRecurso.as_view(),name = 'editar_recurso'),
    path('eliminar_recurso/<int:pk>',EliminarRecurso.as_view(),name = 'eliminar_recurso'),

    # URLS para Jornales
    path('jornal/',JornalList.as_view(),name = 'jornal_list'),
    path('crear_jornal/',CrearJornal.as_view(),name = 'crear_jornal'),
    path('editar_jornal/<int:pk>',ActualizarJornal.as_view(),name = 'editar_jornal'),
    path('eliminar_jornal/<int:pk>',EliminarJornal.as_view(),name = 'eliminar_jornal'),

    #URLS para Gastos
    path('gastos/',GastosList.as_view(),name = 'gastos_list'),
    path('crear_gastos/',CrearGastos.as_view(),name = 'crear_gastos'),
    path('editar_gastos/',ActualizarGastos.as_view(),name = 'editar_gastos'),
    path('eliminar_gastos/',EliminarGastos.as_view(),name = 'eliminar_gastos'),

    # URLS para Ventas
    path('venta/',VentaList.as_view(),name = 'venta_list'),
    path('crear_venta/',CrearVenta.as_view(),name = 'crear_venta'),
    path('editar_venta/<int:pk>',ActualizarVenta.as_view(),name = 'editar_venta'),
    path('eliminar_venta/<int:pk>',EliminarVenta.as_view(),name = 'eliminar_venta'),
]

CLASS zcl_custom_login DEFINITION
  PUBLIC
  INHERITING FROM /ui2/cl_fiori3_login
  FINAL
  CREATE PUBLIC .

  PUBLIC SECTION.
  PROTECTED SECTION.
    METHODS init_default_properties  REDEFINITION.
  PRIVATE SECTION.
ENDCLASS.



CLASS zcl_custom_login IMPLEMENTATION.

  METHOD init_default_properties.

    super->init_default_properties( context ).
    m_properties->set( name = 'img_logo' value = '/sap/public/bc/ui2/logon/img/zcompany_icon.png' ).
    m_properties->set( name = 'img_logo_width' value = '150' ).
    m_properties->set( name = 'img_background' value = '/sap/public/bc/ui2/logon/img/zbkg_img.png' ).
    m_properties->set( name = 'extra_js' value = '/sap/public/bc/ui2/logon/fiori3/js/zlogin_ext.js' ).
    m_properties->set( name = 'label_title_login' value = 'S/4HANA RIG' ).

  ENDMETHOD.

ENDCLASS.

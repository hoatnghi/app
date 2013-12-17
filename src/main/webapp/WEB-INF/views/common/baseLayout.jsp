<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title><tiles:getAsString name="title" /></title>
    <meta name="description" content="responsive photo gallery using colorbox" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- basic styles -->

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/bootstrap.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/font-awesome.min.css" />

    <!--[if IE 7]>
      <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/font-awesome-ie7.min.css" />
    <![endif]-->

    <!-- page specific plugin styles -->

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/colorbox.css" />

    <!-- fonts -->

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/ace-fonts.css" />

    <!-- ace styles -->

    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/ace.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/ace-rtl.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/ace-skins.min.css" />

    <!--[if lte IE 8]>
      <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/ace/assets/css/ace-ie.min.css" />
    <![endif]-->

    <!-- inline styles related to this page -->

    <!-- ace settings handler -->

    <script src="${pageContext.request.contextPath}/resources/ace/assets/js/ace-extra.min.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->

    <!--[if lt IE 9]>
    <script src="${pageContext.request.contextPath}/resources/ace/assets/js/html5shiv.js"></script>
    <script src="${pageContext.request.contextPath}/resources/ace/assets/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <div class="navbar navbar-default" id="navbar">
      <tiles:insertAttribute name="header"/>
    </div>

    <div class="main-container" id="main-container">
      <script type="text/javascript">
        try{ace.settings.check('main-container' , 'fixed')}catch(e){}
      </script>

      <div class="main-container-inner">
        <a class="menu-toggler" id="menu-toggler" href="#">
          <span class="menu-text"></span>
        </a>

        <div class="sidebar" id="sidebar">
          <tiles:insertAttribute name="menu" />
        </div>

        <div class="main-content">
          <div class="breadcrumbs" id="breadcrumbs">
            <script type="text/javascript">
              try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
            </script>

            <ul class="breadcrumb">
              <li>
                <i class="icon-home home-icon"></i>
                <a href="#">Home</a>
              </li>
              <li class="active">Gallery</li>
            </ul><!-- .breadcrumb -->

            <div class="nav-search" id="nav-search">
              <form class="form-search">
                <span class="input-icon">
                  <input type="text" placeholder="Search ..." class="nav-search-input" id="nav-search-input" autocomplete="off" />
                  <i class="icon-search nav-search-icon"></i>
                </span>
              </form>
            </div><!-- #nav-search -->
          </div>

          <div class="page-content">
            <tiles:insertAttribute name="body" />
          </div><!-- /.page-content -->
        </div><!-- /.main-content -->

        <div class="ace-settings-container" id="ace-settings-container">
          <div class="btn btn-app btn-xs btn-warning ace-settings-btn" id="ace-settings-btn">
            <i class="icon-cog bigger-150"></i>
          </div>

          <div class="ace-settings-box" id="ace-settings-box">
            <div>
              <div class="pull-left">
                <select id="skin-colorpicker" class="hide">
                  <option data-skin="default" value="#438EB9">#438EB9</option>
                  <option data-skin="skin-1" value="#222A2D">#222A2D</option>
                  <option data-skin="skin-2" value="#C6487E">#C6487E</option>
                  <option data-skin="skin-3" value="#D0D0D0">#D0D0D0</option>
                </select>
              </div>
              <span>&nbsp; Choose Skin</span>
            </div>

            <div>
              <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-navbar" />
              <label class="lbl" for="ace-settings-navbar"> Fixed Navbar</label>
            </div>

            <div>
              <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-sidebar" />
              <label class="lbl" for="ace-settings-sidebar"> Fixed Sidebar</label>
            </div>

            <div>
              <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-breadcrumbs" />
              <label class="lbl" for="ace-settings-breadcrumbs"> Fixed Breadcrumbs</label>
            </div>

            <div>
              <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-rtl" />
              <label class="lbl" for="ace-settings-rtl"> Right To Left (rtl)</label>
            </div>

            <div>
              <input type="checkbox" class="ace ace-checkbox-2" id="ace-settings-add-container" />
              <label class="lbl" for="ace-settings-add-container">
                Inside
                <b>.container</b>
              </label>
            </div>
          </div>
        </div><!-- /#ace-settings-container -->
      </div><!-- /.main-container-inner -->

      <a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
        <i class="icon-double-angle-up icon-only bigger-110"></i>
      </a>
    </div><!-- /.main-container -->

    <!-- basic scripts -->

    <!--[if !IE]> -->

    <script type="text/javascript">
      window.jQuery || document.write("<script src='${pageContext.request.contextPath}/resources/ace/assets/js/jquery-2.0.3.min.js'>"+"<"+"/script>");
    </script>

    <!-- <![endif]-->

    <!--[if IE]>
<script type="text/javascript">
 window.jQuery || document.write("<script src='${pageContext.request.contextPath}/resources/ace/assets/js/jquery-1.10.2.min.js'>"+"<"+"/script>");
</script>
<![endif]-->

    <script type="text/javascript">
      if("ontouchend" in document) document.write("<script src='${pageContext.request.contextPath}/resources/ace/assets/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
    </script>
    <script src="${pageContext.request.contextPath}/resources/ace/assets/js/bootstrap.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/ace/assets/js/typeahead-bs2.min.js"></script>

    <!-- page specific plugin scripts -->

    <script src="${pageContext.request.contextPath}/resources/ace/assets/js/jquery.colorbox-min.js"></script>

    <!-- ace scripts -->

    <script src="${pageContext.request.contextPath}/resources/ace/assets/js/ace-elements.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/ace/assets/js/ace.min.js"></script>

    <!-- inline scripts related to this page -->

    <script type="text/javascript">
      jQuery(function($) {
  var colorbox_params = {
    reposition:true,
    scalePhotos:true,
    scrolling:false,
    previous:'<i class="icon-arrow-left"></i>',
    next:'<i class="icon-arrow-right"></i>',
    close:'&times;',
    current:'{current} of {total}',
    maxWidth:'100%',
    maxHeight:'100%',
    onOpen:function(){
      document.body.style.overflow = 'hidden';
    },
    onClosed:function(){
      document.body.style.overflow = 'auto';
    },
    onComplete:function(){
      $.colorbox.resize();
    }
  };

  $('.ace-thumbnails [data-rel="colorbox"]').colorbox(colorbox_params);
  $("#cboxLoadingGraphic").append("<i class='icon-spinner orange'></i>");//let's add a custom loading icon

  /**$(window).on('resize.colorbox', function() {
    try {
      //this function has been changed in recent versions of colorbox, so it won't work
      $.fn.colorbox.load();//to redraw the current frame
    } catch(e){}
  });*/
})
    </script>
  </body>
</html>
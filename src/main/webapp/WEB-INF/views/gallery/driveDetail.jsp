<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!-- Add mousewheel plugin (this is optional) -->
<script type="text/javascript" src="<c:url value='/resources/fancyBox/lib/jquery.mousewheel-3.0.6.pack.js'/>"></script>

<!-- Add fancyBox main JS and CSS files -->
<script type="text/javascript" src="<c:url value='/resources/fancyBox/source/jquery.fancybox.js?v=2.1.5'/>"></script>
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/fancyBox/source/jquery.fancybox.css?v=2.1.5'/>" media="screen" />

<!-- Add Button helper (this is optional) -->
<link rel="stylesheet" type="text/css" href="<c:url value='/resources/fancyBox/source/helpers/jquery.fancybox-buttons.css?v=1.0.5'/>" />
<script type="text/javascript" src="<c:url value='/resources/fancyBox/source/helpers/jquery.fancybox-buttons.js?v=1.0.5'/>"></script>

<script type="text/javascript">
    $(document).ready(function() {
        /*
         *  Button helper. Disable animations, hide close button, change title type and content
         */
        $('.thumbnail').fancybox({
          openEffect  : 'none',
          closeEffect : 'none',

          prevEffect : 'none',
          nextEffect : 'none',

          closeBtn  : false,

          helpers : {
            title : {
              type : 'inside'
            },
            buttons : {}
          },

          afterLoad : function() {
            this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
          },
          type : 'image'
        });
    });
</script>

<div class="row">
  <div class="col-lg-12">
    <h3 class="page-header">${album.name}</h3>
  </div>
  <c:forEach items="${album.photos}" var="photo">
  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <a class="thumbnail" data-fancybox-group="button" href="${photo.link}">
      <img class="img-responsive" alt="${photo.description}>" 
        src="${photo.thumbnail}"/>
    </a>
  </div>
  </c:forEach>
</div>
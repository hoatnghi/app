<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="page-content">
  <div class="page-header">
    <h1>
      Google Drive
      <small>
        <i class="icon-double-angle-right"></i>
        ${album.name}
      </small>
    </h1>
  </div><!-- /.page-header -->

  <div class="row">
    <div class="col-xs-12">
      <!-- PAGE CONTENT BEGINS -->

      <div class="row-fluid">
        <ul class="ace-thumbnails">
          <c:forEach items="${album.photos}" var="photo">
          <li>
            <a href="${photo.link}" data-rel="colorbox">
              <img alt="150x150" src="${photo.thumbnail}" />
              <div class="text">
                <div class="inner">${photo.description}</div>
              </div>
            </a>
          </li>
          </c:forEach>
        </ul>
      </div><!-- PAGE CONTENT ENDS -->
    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.page-content -->
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
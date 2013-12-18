<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="page-content">
  <div class="page-header">
    <h1>
      Google Drive Album
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
          <c:forEach items="${albums}" var="album">
          <li>
            <a href="driveDetail?id=${album.id}">
              <img src="${album.thumbnail}" width="220px"/>
            </a>
          </li>
          </c:forEach>
        </ul>
      </div><!-- PAGE CONTENT ENDS -->
    </div><!-- /.col -->
  </div><!-- /.row -->
</div><!-- /.page-content -->
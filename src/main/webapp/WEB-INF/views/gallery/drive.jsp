<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="row">
  <div class="col-lg-12">
    <h3 class="page-header">Google Drive Gallery</h3>
  </div>
  <c:forEach items="${albums}" var="album">
  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <a class="thumbnail" href="driveDetail?id=${album.id}">
    <img class="img-responsive" src="${album.thumbnail}" alt="${album.title}"/></a>
  </div>
  </c:forEach>
</div>
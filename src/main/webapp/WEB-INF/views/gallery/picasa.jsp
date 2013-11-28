<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<div class="row">
  <div class="col-lg-12">
    <h3 class="page-header">Google Picasa Gallery</h3>
  </div>
  <c:forEach items="${albums}" var="album">
  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <a class="thumbnail" href="picasaDetail?id=<s:property value="id"/>">
    <img class="img-responsive" src="<s:property value="thumbnail"/>" alt="<s:property value="title"/>"/></a>
  </div>
  </c:forEach>
</div>

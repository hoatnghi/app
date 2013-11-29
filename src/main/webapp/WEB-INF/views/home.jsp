<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<div class="row">
  <div class="col-lg-12">
    <h3 class="page-header">Gallery</h3>
  </div>
  <c:choose>
  <c:when test="${not empty authorURL}">
  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <a class="thumbnail" href="${authorURL}"><img class="img-responsive" width="400px" src="<c:url value='/resources/images/GoogleDrive.png'/>"></a>
  </div>
  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <a class="thumbnail" href="${authorURL}"><img class="img-responsive" width="400px" src="<c:url value='/resources/images/Picasa.png'/>"></a>
  </div>
  </c:when>
  <c:otherwise>
  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <a class="thumbnail" href="<c:url value='/gallery/drive'/>"><img class="img-responsive" width="400px" src="<c:url value='/resources/images/GoogleDrive.png'/>"></a>
  </div>
  <div class="col-lg-3 col-md-4 col-xs-6 thumb">
    <a class="thumbnail" href="<c:url value='/gallery/picasa'/>"><img class="img-responsive" width="400px" src="<c:url value='/resources/images/Picasa.png'/>"></a>
  </div>
  </c:otherwise>
  </c:choose>
</div>
<div class="row">
  <div class="col-lg-12">
    <h3 class="page-header">Follow up us.</h3>
    <h4> If you'd like to receive our email every time we have new photos, please provide your email.</h4>
  </div>
  <div class="col-lg-3 col-md-4 col-xs-6 thumb"><!-- 
    <s:form action="public/subscribe">
      <s:textfield name="email" label="Email:"></s:textfield>
      <s:submit value="Subscribe"></s:submit>
    </s:form> -->
  </div>
</div>
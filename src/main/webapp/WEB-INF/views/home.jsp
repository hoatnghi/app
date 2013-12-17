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

<div class="page-header">
  <h1>
    Gallery
    <small>
      <i class="icon-double-angle-right"></i>
      responsive photo gallery using colorbox
    </small>
  </h1>
</div><!-- /.page-header -->

<div class="row">
  <div class="col-xs-12">
    <!-- PAGE CONTENT BEGINS -->

    <div class="row-fluid">
      <ul class="ace-thumbnails">
        <li>
          <a href="/resources/ace/assets/images/gallery/image-1.jpg" title="Photo Title" data-rel="colorbox">
            <img alt="150x150" src="/resources/ace/assets/images/gallery/thumb-1.jpg" />
            <div class="tags">
              <span class="label-holder">
                <span class="label label-info">breakfast</span>
              </span>

              <span class="label-holder">
                <span class="label label-danger">fruits</span>
              </span>

              <span class="label-holder">
                <span class="label label-success">toast</span>
              </span>

              <span class="label-holder">
                <span class="label label-warning arrowed-in">diet</span>
              </span>
            </div>
          </a>

          <div class="tools">
            <a href="#">
              <i class="icon-link"></i>
            </a>

            <a href="#">
              <i class="icon-paper-clip"></i>
            </a>

            <a href="#">
              <i class="icon-pencil"></i>
            </a>

            <a href="#">
              <i class="icon-remove red"></i>
            </a>
          </div>
        </li>

        <li>
          <a href="/resources/ace/assets/images/gallery/image-2.jpg" data-rel="colorbox">
            <img alt="150x150" src="/resources/ace/assets/images/gallery/thumb-2.jpg" />
            <div class="text">
              <div class="inner">Sample Caption on Hover</div>
            </div>
          </a>
        </li>

        <li>
          <a href="/resources/ace/assets/images/gallery/image-3.jpg" data-rel="colorbox">
            <img alt="150x150" src="/resources/ace/assets/images/gallery/thumb-3.jpg" />
            <div class="text">
              <div class="inner">Sample Caption on Hover</div>
            </div>
          </a>

          <div class="tools tools-bottom">
            <a href="#">
              <i class="icon-link"></i>
            </a>

            <a href="#">
              <i class="icon-paper-clip"></i>
            </a>

            <a href="#">
              <i class="icon-pencil"></i>
            </a>

            <a href="#">
              <i class="icon-remove red"></i>
            </a>
          </div>
        </li>

        <li>
          <a href="/resources/ace/assets/images/gallery/image-4.jpg" data-rel="colorbox">
            <img alt="150x150" src="/resources/ace/assets/images/gallery/thumb-4.jpg" />
            <div class="tags">
              <span class="label-holder">
                <span class="label label-info arrowed">fountain</span>
              </span>

              <span class="label-holder">
                <span class="label label-danger">recreation</span>
              </span>
            </div>
          </a>

          <div class="tools tools-top">
            <a href="#">
              <i class="icon-link"></i>
            </a>

            <a href="#">
              <i class="icon-paper-clip"></i>
            </a>

            <a href="#">
              <i class="icon-pencil"></i>
            </a>

            <a href="#">
              <i class="icon-remove red"></i>
            </a>
          </div>
        </li>

        <li>
          <div>
            <img alt="150x150" src="/resources/ace/assets/images/gallery/thumb-5.jpg" />
            <div class="text">
              <div class="inner">
                <span>Some Title!</span>

                <br />
                <a href="/resources/ace/assets/images/gallery/image-5.jpg" data-rel="colorbox">
                  <i class="icon-zoom-in"></i>
                </a>

                <a href="#">
                  <i class="icon-user"></i>
                </a>

                <a href="#">
                  <i class="icon-share-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </li>

        <li>
          <a href="/resources/ace/assets/images/gallery/image-6.jpg" data-rel="colorbox">
            <img alt="150x150" src="/resources/ace/assets/images/gallery/thumb-6.jpg" />
          </a>

          <div class="tools tools-right">
            <a href="#">
              <i class="icon-link"></i>
            </a>

            <a href="#">
              <i class="icon-paper-clip"></i>
            </a>

            <a href="#">
              <i class="icon-pencil"></i>
            </a>

            <a href="#">
              <i class="icon-remove red"></i>
            </a>
          </div>
        </li>

        <li>
          <a href="/resources/ace/assets/images/gallery/image-1.jpg" data-rel="colorbox">
            <img alt="150x150" src="/resources/ace/assets/images/gallery/thumb-1.jpg" />
          </a>

          <div class="tools">
            <a href="#">
              <i class="icon-link"></i>
            </a>

            <a href="#">
              <i class="icon-paper-clip"></i>
            </a>

            <a href="#">
              <i class="icon-pencil"></i>
            </a>

            <a href="#">
              <i class="icon-remove red"></i>
            </a>
          </div>
        </li>

        <li>
          <a href="/resources/ace/assets/images/gallery/image-2.jpg" data-rel="colorbox">
            <img alt="150x150" src="/resources/ace/assets/images/gallery/thumb-2.jpg" />
          </a>

          <div class="tools tools-top">
            <a href="#">
              <i class="icon-link"></i>
            </a>

            <a href="#">
              <i class="icon-paper-clip"></i>
            </a>

            <a href="#">
              <i class="icon-pencil"></i>
            </a>

            <a href="#">
              <i class="icon-remove red"></i>
            </a>
          </div>
        </li>
      </ul>
    </div><!-- PAGE CONTENT ENDS -->
  </div><!-- /.col -->
</div><!-- /.row -->
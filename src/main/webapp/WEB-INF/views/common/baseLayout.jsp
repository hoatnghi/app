<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <title><tiles:getAsString name="title"/></title>

    <!-- Bootstrap core CSS -->
    <link href="/resource/bootstrap/css/bootstrap.css" rel="stylesheet">

    <!-- Custom CSS for the 'Thumbnail Gallery' Template -->
    <link href="/resource/bootstrap/css/thumbnail-gallery.css" rel="stylesheet">
    
      <!-- javascript -->
    <script src="/resource/bootstrap/js/jquery.js"></script>
    <script src="/resource/bootstrap/js/bootstrap.js"></script>
    
  </head>
  <body>

    <tiles:insertAttribute name="header"/>
    
    <div class="container">
      <tiles:insertAttribute name="body"/>
      <hr>
      <tiles:insertAttribute name="footer"/>
    </div><!-- /.container -->

  </body>

</html>
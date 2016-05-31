<?php  
/*
 *
 * header.php
 *
 * the theme header
 *
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo('description') ?>">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<!-- Favicon - Apple touch icon -->
	<?php  
		$favicon = IMAGES . '/icons/favicon.ico';
		$touch_icon = IMAGES . '/icons/apple-touch-icon.png';
	?>
	<link rel="shortcut icon" href="<?php echo $favicon; ?>">
	<link rel="apple-touch-icon-precomposed" href="<?php echo $touch_icon; ?>" size="180x180">

	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<div id="main-nav-top">
	<nav class="navbar navbar-inverse">
	  <div class="container">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
	        <span class="sr-only"><?php _e('Toggle navigation', 'kairo'); ?></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="<?php echo esc_url( home_url('/') ); ?>">
	      	<?php bloginfo('name'); ?>
	      	<i class="fa fa-circle-thin"></i>
	      </a>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      
	      <?php  
	      	wp_nav_menu(array(
	      		'menu_class' => 'nav navbar-nav navbar-right',
	      		'theme_location' => 'main-menu'
	      	));
	      ?>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
</div>	
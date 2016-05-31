<?php  
/*
 *
 * index.php
 *
 * the main content file
 *
 */
?>

<?php  
	get_header();
?>
<header id="main-header">
		
		<div class="jumbotron hero">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h1 class="page-header"><?php bloginfo('name'); ?> </h1>
						<h3><?php bloginfo('description'); ?></h3>
					</div> <!-- end col -->
				</div> <!-- endrow -->
			</div> <!-- end container -->
		</div> <!-- end jumbotron -->
	</header>
<section class="l-breathe main-content">
	<div class="container">
		<div class="row">
			<aside class="sidebar col-md-4 col-md-push-8">
				<?php get_sidebar(); ?>
			</aside>
			<div class="posts col-md-8 col-md-pull-4">
				<div class="row">
					<?php if (have_posts()) : while(have_posts()) : the_post() ; ?>
						<?php get_template_part('content', get_post_format() ); ?>
					<?php endwhile; ?>

					<?php else :  ?>
						<?php get_template_part('content', 'none' ); ?>
					<?php endif; ?>
					<?php  
						// Load numbered pagination
						kairo_numbered_pagination();
					?>
				</div> <!-- end row -->
			</div>  <!-- end posts -->
		</div>  <!-- end row -->
	</div> <!-- end container -->
</section>

<?php get_footer(); ?>
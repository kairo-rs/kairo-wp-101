<?php  
/*
 *
 * single.php
 *
 * the single post template
 *
 */
?>

<?php  
	get_header();
?>

		<?php if (have_posts()) : while(have_posts()) : the_post() ; ?>
			<div class="jumbotron hero">
				<div class="container">
					<div class="row">
						<div class="col-xs-12">
							<h1 class="page-header"><?php the_title(); ?> </h1>
						</div> <!-- end col -->
					</div> <!-- endrow -->
				</div> <!-- end container -->
			</div> <!-- end jumbotron -->
			
				<?php if (has_post_thumbnail()) { ?>
						<div class="land">
								<?php the_post_thumbnail('thumbnail', array('class' => 'img-responsive img-circle center-block') ); ?>
						</div> <!-- end land -->
						<div class="container">
							<div class="single-post  l-breathe">
								<div class="row">
									<article class="post-excerpt col-sm-8 col-sm-offset-2">
										<header>
											<?php 
												
												// Get post meta
												kairo_post_meta();
											?>
										</header>
										<?php the_content(); ?>
									</article>
								</div><!--end row -->
							</div> <!--end single post -->
						</div>  <!-- end container -->
					<?php
					} ?>
			
				
		<?php endwhile; ?>

		<?php else :  ?>
		<?php _e('Nothing here', 'kairo'); ?>
		<?php endif; ?>
					


<?php get_footer(); ?>
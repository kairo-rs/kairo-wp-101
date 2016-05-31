<?php 
/*
 *
 * content.php
 *
 * default template for displaying content
 *
 */	
?>

<div id="post-<?php the_ID(); ?>"  <?php post_class('col-md-12') ?>>
	<?php if (has_post_thumbnail()) { ?>
		<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" class="thumbnail">
			<?php the_post_thumbnail('thumbnail', array('class' => 'img-responsive img-circle') ); ?>
		</a>
	<?php
	} ?>

	<article class="post-excerpt">
		<header>
			<?php 
				// Display title in a link 
				echo '<h3><a href="' . get_the_permalink() . '">' . get_the_title() . '</a></h3>';

				// Get post meta
				kairo_post_meta();
			?>
		</header>
		<?php the_content(__('continue reading...', 'kairo')); ?>
	</article>
					

</div>  <!--end post -->



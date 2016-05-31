<?php  
/*
 *
 * functions.php
 *
 * Theme's functions
 *
 */

/*-----------------------------------------------------------------------------------------------------------------------
 * 1. CONSTANTS
 *-----------------------------------------------------------------------------------------------------------------------
 */
define('THEMEROOT', get_stylesheet_directory_uri());
define('IMAGES', THEMEROOT . '/img');
define('JS', THEMEROOT . '/js');

/*-----------------------------------------------------------------------------------------------------------------------
 * 2. THEME SETUP
 *-----------------------------------------------------------------------------------------------------------------------
 */
if (! function_exists('kairo_theme_setup')) {
	function kairo_theme_setup() {
		/* Make theme available for translation */
		$lang_dir = THEMEROOT .'/languages';
		load_theme_textdomain('kairo', $lang_dir);

		// Add support for RSS
		add_theme_support('automatic-feed-links');

		// Add support for thumbnails
		add_theme_support('post-thumbnails');

		// Register navs
		register_nav_menus( array(
			'main-menu' 	 => __('Main Menu', 'kairo'),
			'theme_location' => 'main-menu',
			'container' 	 =>  false
			
		));

	}

	add_action('after_setup_theme', 'kairo_theme_setup');
}

/*-----------------------------------------------------------------------------------------------------------------------
 * 3. POST META
 *-----------------------------------------------------------------------------------------------------------------------
 */

if (! function_exists('kairo_post_meta')) {
	function kairo_post_meta() {
		if ( get_post_type() === 'post') {
			echo '<p class="post-meta">';
			_e('by', 'kairo');
			printf('<a href="%1$s" rel="author"> %2$s </a>', esc_url(get_author_posts_url(get_the_author_meta('ID'))), get_the_author());
			_e('on', 'kairo');
			echo '<span>' . get_the_date('Y-m-d') . '</span></p>';
		}
	}
}

/*-----------------------------------------------------------------------------------------------------------------------
 * 4. PAGINATION
 *-----------------------------------------------------------------------------------------------------------------------
 */

if (! function_exists('kairo_numbered_pagination')) {
	function kairo_numbered_pagination() {
		$args = array(
			'prev_next' => false,
			'type'      => 'array'
		);

		$pagination = paginate_links($args);
		
		echo '<div class="col-md-12">';
		if (is_array($pagination)) {
			echo '<ul class="nav nav-pills">';
			foreach ($pagination as $page) {
				
				if (!strpos($page, ' current')) {
					echo '<li>' . $page . '</li>';
				} else {
					echo '<li class="active"><a href="#">' . $page . '</a></li>';
					
				}
			}

			echo '</ul>';
		}

		echo '</div>';
	}
}

/*-----------------------------------------------------------------------------------------------------------------------
 * 5. WIDGET AREAS
 *-----------------------------------------------------------------------------------------------------------------------
 */

if (! function_exists('kairo_widget_init')) {
	function kairo_widget_init() {
		if (function_exists('register_sidebar')) {
			register_sidebar(array(
				'name' 		    => __('Main widget area', 'kairo'),
				'id'  		    => 'main-sidebar',
				'description'   => __('Appears on blog pages', 'kairo'),
				'before_widget' => '<div id="%1$s" class="widget %2$s">',
				'after_widget'  => '</div> <!-- end widget -->',
				'before_title'  => '<h2>',
				'after_title'   => '</h2>'

			));
		}
	}

	add_action('widgets_init', 'kairo_widget_init');
}

/*-----------------------------------------------------------------------------------------------------------------------
 * 6. ENQUEUE JS ANS STYLES
 *-----------------------------------------------------------------------------------------------------------------------
 */

if (! function_exists('kairo_scripts')) {
	function kairo_scripts() {
		// Register scripts
		wp_register_script('custom-js', JS .'/scripts.js', array( 'jquery'), false, true);

		// Load the scripts
		wp_enqueue_script('custom-js');

		// Load css
		wp_enqueue_style('gfont', 'https://fonts.googleapis.com/css?family=Lato:400,300,700');
		wp_enqueue_style('fawesome', 'https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css');
		wp_enqueue_style('main', THEMEROOT .'/css/styles.css');
	}

	add_action('wp_enqueue_scripts', 'kairo_scripts');

}

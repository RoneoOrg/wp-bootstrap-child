<?php
/**
* Template Name: Full Width with Grid
 */

get_header(); ?>

	<section id="primary" class="content-area col-12">
		<div id="main" class="site-main homepage-grid" role="main">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</div><!-- #main -->
	</section><!-- #primary -->

<?php
get_footer();

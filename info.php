<?php include('./includes/header.php'); ?>

    <?php if(isset($_GET['id'])):?>
        <div class="movie-info">
            
        </div>
        
        <div class="similar-movies">
        <div class="over"></div>
            <div class="get-plan">
                <p>Wants to now more about our plan?</p>
                <a href="#">Check</a>
            </div>

        </div>
    <?php else:?>

        <h1>404.</h1>
    
    <?php endif;?>

<?php include('./includes/footer.php'); ?>  
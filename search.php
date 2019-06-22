<?php

    if(isset($_GET['query'])){
        $query = $_GET['query'];
    }

?>

<?php include('./includes/header.php'); ?>

    <div class="search-wrapper">
        <div class="banner-show-query">
            <h2><?php $query ?></h2>
        </div>
    </div>

<?php include('./includes/footer.php'); ?>
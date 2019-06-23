<?php

    if(isset($_GET['query'])){
        $query = $_GET['query'];
    }

?>

<?php include('./includes/header.php'); ?>

    <div class="main-banner">
        <div class="over"></div>
    </div>

    <div class="search-wrapper">
        <div class="show-query-results">
            
        </div>
        <div class="container">
            <div class="row fs-0" id="display_search">
                
            </div>
        </div>
    </div>

<?php include('./includes/footer.php'); ?>
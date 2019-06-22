<?php include('./includes/header.php'); ?>

    <?php if(isset($_GET['id'])):?>
        <div class="movie-info">
            
        </div>
        <div class="pricing-movie">
            <div class="container">
                <div class="row fs-0">
                    <div class="col-xs-12 col-md-6 col-in-block">
                        <ul class="type-buy">
                            <li><a href="#">Rent now</a></li>
                            <li><a href="#">Buy now</a></li>
                            <li><a href="#">Preview now</a></li>
                        </ul>    
                    </div>
                    <div class="col-xs-12 col-md-6 col-in-block v-top">
                        <div class="box-info">
                            <h2>Rent Now</h2>
                            <span>$ 6.50</span>
                            <br>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, a!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php else:?>

        <h1>404.</h1>
    
    <?php endif;?>

<?php include('./includes/footer.php'); ?>  
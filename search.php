<?php

    if(isset($_GET['query'])){
        $query = $_GET['query'];
    }

?>

<?php include('./includes/header.php'); ?>

    <div class="main-banner">
        <div class="over"></div>
        <div class="search-again">
            <h3>Search</h3>
            <form id="form-search">
                <input type="text" id="search" placeholder="Search">
                <button id="goToSearch">Search</button>
            </form>
        </div>
    </div>
    <?php if(isset($_GET['query'])):?>

        <div class="search-wrapper">
            <div class="show-query-results">
                
            </div>
            <div class="container">
                <div class="row fs-0" id="display_search">
                    
                </div>
            </div>
        </div>
    <?php else:?>
        <div class="not-query">
            <h1>What can you search?</h1>
            <!-- <ul>
                <li><a href="search.php?query=keanu">Actors (e.g Keanu)</a></li>
                <li><a href="search.php?query=avengers">Movies (e.g Avengers)</a></li>
                <li><a href="search.php?query=game of thrones">TV shows (e.g Game of thrones)</a></li>
            </ul> -->
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 col-md-4">
                        <div class="search-example actors">
                            <div class="bottom-info">
                                <a href="search.php?query=keanu">Actors</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sequi repellat vero commodi laborum ratione voluptatum esse eum nisi sit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4">
                        <div class="search-example movies-sear">
                            <div class="bottom-info">
                                <a href="search.php?query=avengers">Movies</a>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatibus laudantium, tempora vero similique repudiandae eveniet alias eaque, delectus, est animi ipsum consectetur nam ex!</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xs-12 col-md-4 ">
                        <div class="search-example tv-sear">
                            <div class="bottom-info">
                                <a  href="search.php?query=game of thrones">TV shows</a>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis velit laudantium fugit placeat quia iste. Ratione ad et repellat ut esse aperiam sequi quod voluptatibus!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endif;?>

<?php include('./includes/footer.php'); ?>
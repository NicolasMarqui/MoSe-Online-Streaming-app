<?php include('./includes/header.php'); ?>
    <div class="main-banner">
        <div class="over"></div>
    </div>
    <div class="movies-wrapper">
        <div class="info-text">
            <h2>Choose.Watch.Enjoy.</h2>
        </div>
        <div class="choose-type">
            <div class="container-fluid">
                <div class="row fs-0">
                    <div class="col-xs-12 col-in-block text-center">
                        <ul class="types">
                            <li class="active"><h3>Trending</h3></li>
                            <li><h3>Movies</h3></li>
                            <li><h3>TV shows</h3></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-2 hidden-xs hidden-sm p-l-0">
                    <div class="choose-category">
                        <div class="search">
                            <h3>Search</h3>
                            <form id="form-search">
                                <input type="text" id="search" placeholder="Search">
                                <button id="goToSearch">Search</button>
                            </form>
                        </div>
                        <div class="show-genre-list">
                            <ul id="genre-parent">
                                <!-- <li ><a href="">Teste</a></li>
                                <li><a href="">Teste</a></li>
                                <li><a href="">Teste</a></li>
                                <li><a href="">Teste</a></li>
                                <li><a href="">Teste</a></li> -->

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-md-10">
                    <div class="container m-w">
                        <div class="row fs-0" id="display-movies">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php include('./includes/footer.php'); ?>
    

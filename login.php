<?php include('./includes/header.php'); ?>

    <div class="login-wrapper">
        <div class="opa"></div>
        <div class="login-middle">
            <form action="login_.php" method="POST">
                <h2>Welcome <span>back</span></h2>
                <input type="text" name="user" id="username" placeholder="Username">
                <input type="password" placeholder="Password">

                <a href="signup.php">Don't have an account?</a>

                <button>Login</button>
            </form>
        </div>
    </div>

<?php include('./includes/footer.php'); ?>
<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css" />
    <link rel="stylesheet" href="./package/OwlCarousel2-2.3.4/dist/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="./package/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="./style/main.css">
 
    <title>ABAAD.SA</title>
</head>

<body>

    <div class="App">
        <div class="page-wrapper">

            <div class="form-area">
                <img class='floated-logo' src="assets/svg/transLogo.svg" alt="" />

                <div class="form-wrapper">

                    <div class="container-">
                        <div class="row responsive-card">
                            <div class="col-12"  data-aos="fade-down"   data-aos-duration="2000">
                                <h5 class='title-lable'>
                                    اهلا وسهلا بك
                                    <img class='mx-2' src="assets/img/hey.png" alt="" />
                                </h5>
                                <h4 class='fw-bold mb-5'>
                                    تغير كلمة السر
                                </h4>
                            </div>
                            <div class="col-12">


                                <div class="mb-3 position-relative"  data-aos="fade-right"   data-aos-duration="2000">
                                    <label for="password" class="form-label">
                                        الرقم السري الجديد
                                    </label>
                                    <input type="password" class="form-control" id="password" required
                                        placeholder='قم بادخال الرقم السري الخاص بك' />
                                    <ion-icon id="show-password" toggle="#password" name="eye-outline"></ion-icon>

                                </div>
                                <div class="mb-3 position-relative"  data-aos="fade-left"   data-aos-duration="2000">
                                    <label for="password-confirm" class="form-label">
                                        تطابق الرقم السري
                                    </label>
                                    <input type="password" class="form-control" id="password-confirm" required
                                        placeholder='قم بادخال  الرقم السري الخاص بك مرة اخري ' />
                                    <ion-icon id="show-password" toggle="#password-confirm "
                                        name="eye-outline"></ion-icon>

                                </div>

                                <div class="mt-5 mb-3"  data-aos="fade-up"   data-aos-duration="2000">
                                    <a class="btn btn-primary w-100" href="./landing.html">
                                        تغير كلمة السر
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="landing-img">
                <div class="logo-wrapper">
                    <img src="assets/svg/vector.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="./package/OwlCarousel2-2.3.4/dist/owl.carousel.min.js"></script>
    <script src="./package/bootstrap-5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="./js/main.js"></script>


</body>

</html>
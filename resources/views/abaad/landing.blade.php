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
    <header class="bg-secondary">
        <div class="container">
            <div class="d-flex justify-content-between">
                <ul class="nav">
                    <li class="nav-item">
                        <span class="nav-link text-gray-6">
                            <ion-icon class="text-primary" name="call-outline"></ion-icon> 0504883053</span>

                    </li>
                    <li class="nav-item">
                        <span class="nav-link text-gray-6" href="#">
                            <ion-icon class="text-primary" name="mail-outline"></ion-icon>
                            info@dcs4d.com</span>
                    </li>


                </ul>
                <ul class="nav">

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-gray-6" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            العربية - رس
                            <img src="./assets/svg/sa.svg" alt="">
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link text-gray-6" href="#">عن عالمنا</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-gray-6" href="#">الرؤية</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-gray-6" href="#">منطلقاتنا</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-gray-6" href="#">تواصل معنا</a>
                    </li>

                </ul>
            </div>

        </div>

    </header>
    <header class="bg-white">
        <div class="container">
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src="./assets/img/logo.png" alt="">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="d-flex  w-100 position-relative" role="search">
                            <input class="form-control me-5 w-100 bg-white" type="search" placeholder="ابحث عما تريد"
                                aria-label="Search">
                            <button class="btn position-absolute start-0 text-gray-6" type="submit"><i class='bx bx-search'></i></button>
                        </form>
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <div class="user-info d-inline-flex gap-2">
                                        <div class="bg-secondary rounded-circle user-icon">
                                            <ion-icon name="person-outline"></ion-icon>
                                        </div>

                                        <div class="">
                                            <p class="mb-0 text-gray-6">
                                                مرحبا بك
                                            </p>
                                            <h6 class="mb-0 fw-bold">
                                                تسجيل دخول
                                            </h6>
                                        </div>

                                    </div>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>

        </div>

    </header>
    <main>
        <!-- main slider -->
        <section>
            <div id="main-carousel" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="./assets/img/slider.png" class="d-block w-100" alt="...">
                        <div class="carousel-caption">
                            <h1 class="carousel-header"  data-aos="fade-right"   data-aos-duration="2000">شركة أبعاد التطويرية لخدمات الأعمال</h1>
                            <p  data-aos="fade-left"   data-aos-duration="2300">عالم متناغم ما بين الجودة والاحترافية في مجالات الشركة ودعم الأفكار الإبداعية</p>
                            <button class="btn btn-primary btn-lg"  data-aos="fade-down"   data-aos-duration="2500">اكتشف المزيد</button>
                        </div>
                    </div>


                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#main-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#main-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>

        <div class="container">
            <!-- specialites -->
            <section class="">

                <div class="section-header" data-aos="fade-down"   data-aos-duration="2000">
                    <h4 class="title">منطلقاتنا</h4>
                    <p class="subtitle">اعرف المزيد عن خدمات منصة ابعاد</p>
                </div>
                <div class="row"  data-aos="fade-up"  data-aos-duration="2000">
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/spec1.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">الريادة</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/spec2.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">المهنية</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/spec3.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">الجودة</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/spec4.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">الرقمنة</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                </div>
            </section>
            <!-- sevices -->
            <section>
                <div class="d-flex justify-content-between">
                    <div class="section-header" data-aos="fade-left"  data-aos-duration="2000">
                        <h4 class="title">خدمات شركة أبعاد</h4>
                        <p class="subtitle">شركة أبعاد التطويرية لخدمات الأعمال</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-outline-primary" data-aos="fade-right"  data-aos-duration="2000">
                            عرض الكل
                            <ion-icon name="chevron-forward-outline"></ion-icon>
                        </button>
                    </div>

                </div>

                <div class="row" data-aos="fade-up"  data-aos-duration="2000">
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/serv1.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">التصميم</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/serv2.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">التدريب</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/serv3.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">التسويق</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/serv4.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">الرقمنة</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/serv5.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">ادارة المشاريع</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/serv6.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">الدعم الفني</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/serv7.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">خدمة المبيعات</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <div class="col-sm-6 col-md-3">
                        <div class="item-figure ">
                            <figure class="figure rounded-5 m-0">
                                <img src="./assets/img/serv8.png" class="figure-img img-fluid m-0" alt="...">
                                <figcaption class="figure-caption">
                                    <h3 class="caption-title">التاهيل</h3>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
            <!-- about -->
            <section>
                <div class="section-header" data-aos="fade-up"  data-aos-duration="2000">
                    <h4 class="title">القائمون على الشركة</h4>
                    <p class="subtitle">اعرف المزيد عن مالك شركة ابعاد</p>

                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6 mb-3" data-aos="fade-left"  data-aos-duration="2000">
                        <h6 class="fw-bold">المدير التنفيذي</h6>
                        <ul class="text-gray-6">
                            <li class="mb-2">
                                يشغل سعادة الأستاذ عبدالله بن سعيد الزهراني منصب الرئيس التنفيذي للشركة. . ترأس سعادة
                                الأستاذ: عبدالله الزهراني العديد من المناصب القيادية وله العديد من المشاركات في تطوير
                                القطاع الثالث. ويحمل سعادته فكراً مؤسسياً وإدارياً رائداً يعود إلى خبرته الطويلة في
                                تأسيس وترأس إدارات وعضويات
                            </li>
                            <li class="mb-2">
                                يضطلع سعادة أ. الزهراني بمسؤولية التشريع القانوني والإداري للمنشآت غير الربحية والقطاع
                                الخاص، وبالتشريعات اللازمة لنمو وتماسك تلك المنشآت، ويحمل سعادته فكراً مؤسسياً وإدارياً
                                رائداً يعود إلى خبرته في تأسيس وترأس إدارات وعضويات عدد من الجهات بالإضافة إلى خبرته
                                الواسعة في العمل الخيري وتوليه المناصب القيادية لتلك المنشآت ومشاركته لعدد من الورش
                                التطويرية للقطاع الثالث. وإدارته العديد من الملتقيات والندوات.
                            </li>
                            <li class="mb-2">
                                يتميز أ. الزهراني برؤية عملية تسندها خبرة طويلة في المجال والحكومي والخاص والخيري، ساعدت
                                في التطوير والنهوض بالقطاع الحكومي والخاص والقطاع الثالث والغير ربحي.
                            </li>
                            <li class="mb-2">
                                وعلى الصعيد العلمي، حصل أ. عبدالله الزهراني على درجة الماجستير في الإرشاد الأسري من
                                جامعة الأسكندرية.
                            </li>
                        </ul>
                    </div>
                    <div class="col-sm-12 col-md-6 mb-3">
                        <div class="d-flex justify-content-end" data-aos="fade-right"  data-aos-duration="2000">
                            <img class="w-100" src="./assets/img/ceo.png" alt="">
                        </div>
                    </div>
                   
                </div>
            </section>
            <!-- team -->
            <section>
                <div class="d-flex justify-content-between" data-aos="fade-down"  data-aos-duration="2000">
                    <div class="section-header">
                        <h4 class="title">فريق العمل</h4>
                        <p class="subtitle">اعرف المزيد عن مستشاري شركة ابعاد</p>
                    </div>




                    <div class="position-relative bg-primary">

                    </div>
                </div>
                <div class="row"  data-aos="fade-up"  data-aos-duration="2000" >
                    <div class="col-sm-12  mb-3" data-aos="fade-up"  data-aos-duration="2000">
                        <h6 class="fw-bold">عن المستشارين في شركة ابعاد </h6>
                        <ul class="text-gray-6">
                            <li class="mb-2">
                                مستشارونا هم الجيل الواعد في مجالاتهم، حيث قدموا أكثر من عمل حقق التميّز والصدارة في
                                المجالات المختلفة لأعمالهم. تقوم شركة أبعاد على توظيف أفضل الخبرات الإدارية والتقنية في
                                المنطقة لتلبية نجاح جهاتكم ومشروعاتكم.
                            </li>

                        </ul>
                    </div>
                    <div id="team-carousel" class="owl-carousel">
                        <div>
                            <div class="item-figure ">
                                <figure class="figure rounded-5 m-0">
                                    <img src="./assets/img/team1.png" class="figure-img img-fluid m-0" alt="...">
                                </figure>
                                <div class="figure-caption text-center">
                                    <h5 class="fw-bold">
                                        مستشار محمد عادل الالفي
                                    </h5>
                                    <p class="text-gray-6">Backend Developer</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div class="item-figure ">
                                <figure class="figure rounded-5 m-0">
                                    <img src="./assets/img/team2.png" class="figure-img img-fluid m-0" alt="...">
                                </figure>
                                <div class="figure-caption text-center">
                                    <h5 class="fw-bold">
                                        مستشار اشرف صلاح
                                    </h5>
                                    <p class="text-gray-6">System Administrator</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div class="item-figure ">
                                <figure class="figure rounded-5 m-0">
                                    <img src="./assets/img/team3.png" class="figure-img img-fluid m-0" alt="...">
                                </figure>
                                <div class="figure-caption text-center">
                                    <h5 class="fw-bold">
                                        مستشار محمد ياسر
                                    </h5>
                                    <p class="text-gray-6">Sr. UI/UX Designer</p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div class="item-figure ">
                                <figure class="figure rounded-5 m-0">
                                    <img src="./assets/img/team4.png" class="figure-img img-fluid m-0" alt="...">
                                </figure>
                                <div class="figure-caption text-center">
                                    <h5 class="fw-bold">
                                        مستشار ايمن سلطان
                                    </h5>
                                    <p class="text-gray-6"></p>
                                </div>

                            </div>
                        </div>
                        <div>
                            <div class="item-figure ">
                                <figure class="figure rounded-5 m-0">
                                    <img src="./assets/img/team3.png" class="figure-img img-fluid m-0" alt="...">
                                </figure>
                                <div class="figure-caption text-center">
                                    <h5 class="fw-bold">
                                        مستشار محمد عادل الالفي
                                    </h5>
                                    <p class="text-gray-6">Backend Developer</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 mt-5 mb-3" data-aos="fade-down"  data-aos-duration="2000">
                        <h6 class="fw-bold">
                            تواصل معنا
                        </h6>
                        <p class="text-gray-6">
                            خطوة نجاحك الأولى تبدأ بالتواصل معنا لنساعدك في إطلاق عملك بإمكانيات متقدمة والاستفادة من
                            فرصة جديدة

                        </p>
                    </div>
                </div>



            </section>
            <!-- testemonials -->
            <section>
                <div class="section-header" data-aos="fade-up"  data-aos-duration="2000">
                    <h3 class="title">آراء العملاء </h3>
                    <p class="subtitle">بيتم استعراض بعض آراء وتعليقات المستخدمين عن منصة ابعاد</p>

                </div>

                <div class="row" data-aos="fade-right"  data-aos-duration="2000">
                    <div id="test-carousel" class="owl-carousel" >
                        <div class="test-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center w-100 mb-3">
                                        <ul class="star-rate d-inline-flex ">
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star.svg" alt="">
                                            </li>
                                        </ul>
                                        <img class="d-inline test-icon" src="./assets/svg/Left quotes sign.svg" alt="">
                                    </div>
                                    <div class="mb-3">
                                        <p class="text-gray-6">استخدمنا ابعاد قبل أربع سنوات ثم غادرناها قبل أن يكون
                                            فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
                                            التعامل مع المبرمجين . ثم عدنا لشركة ابعاد ووجدنا تطورا هائلاً وعملا مميزاً
                                        </p>
                                    </div>
                                    <div class="user-info d-inline-flex gap-2">
                                        <div class="rounded-circle overflow-hidden">
                                            <img src="./assets/svg/Ellipse 5 (1).svg" alt="">
                                        </div>

                                        <div class="">
                                            <h6 class="mb-0 fw-bold">
                                                محمد ياسر

                                            </h6>
                                            <p class="mb-0 text-gray-6 sub-info">
                                                مهندس إستشارى لدى شركة ابعاد

                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="test-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center w-100 mb-3">
                                        <ul class="star-rate d-inline-flex ">
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star.svg" alt="">
                                            </li>
                                        </ul>
                                        <img class="d-inline test-icon" src="./assets/svg/Left quotes sign.svg" alt="">
                                    </div>
                                    <div class="mb-3">
                                        <p class="text-gray-6">استخدمنا ابعاد قبل أربع سنوات ثم غادرناها قبل أن يكون
                                            فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
                                            التعامل مع المبرمجين . ثم عدنا لشركة ابعاد ووجدنا تطورا هائلاً وعملا مميزاً
                                        </p>
                                    </div>
                                    <div class="user-info d-inline-flex gap-2">
                                        <div class="rounded-circle overflow-hidden">
                                            <img src="./assets/svg/Ellipse 5.svg" alt="">
                                        </div>

                                        <div class="">
                                            <h6 class="mb-0 fw-bold">
                                                محمد ياسر

                                            </h6>
                                            <p class="mb-0 text-gray-6 sub-info">
                                                مهندس إستشارى لدى شركة ابعاد

                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="test-card">
                            <div class="card">
                                <div class="card-body">
                                    <div class="d-flex justify-content-between align-items-center w-100 mb-3">
                                        <ul class="star-rate d-inline-flex ">
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star-active.svg" alt="">
                                            </li>
                                            <li>
                                                <img src="./assets/svg/star.svg" alt="">
                                            </li>
                                        </ul>
                                        <img class="d-inline test-icon" src="./assets/svg/Left quotes sign.svg" alt="">
                                    </div>
                                    <div class="mb-3">
                                        <p class="text-gray-6">استخدمنا ابعاد قبل أربع سنوات ثم غادرناها قبل أن يكون
                                            فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في
                                            التعامل مع المبرمجين . ثم عدنا لشركة ابعاد ووجدنا تطورا هائلاً وعملا مميزاً
                                        </p>
                                    </div>
                                    <div class="user-info d-inline-flex gap-2">
                                        <div class="rounded-circle overflow-hidden">
                                            <img src="./assets/svg/Ellipse 5 (2).svg" alt="">
                                        </div>

                                        <div class="">
                                            <h6 class="mb-0 fw-bold">
                                                محمد ياسر

                                            </h6>
                                            <p class="mb-0 text-gray-6 sub-info">
                                                مهندس إستشارى لدى شركة ابعاد

                                            </p>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section>
            <!-- form -->
            <section>
                <div class="section-header" data-aos="fade-up"  data-aos-duration="2000">
                    <h3 class="title">
                        شاركنا خبرتك
                    </h3>
                    <p class="subtitle">
                        هل ترى نفسك محاضراً بارعًا؟ أهلًا فيك بيننا! مساهمتك في إثراء المحتوى التقني العربي, صانع حقائب
                        تدريبية , المجال الإداري او التسويق وإدارة المشاريع والحوكمة تشكل فارقًا! شاركنا خبرتك عبر تعبئة
                        النموذج:
                    </p>

                </div>

                <div class="row" data-aos="fade-down"  data-aos-duration="2000">
                    <div class="col-sm-12 col-md-10">
                        <form action="">
                            <div class="mb-3">
                                <label for="fullname" class="form-label">
                                    اسم المدرب الرباعي <span class="text-danger">*</span>
                                </label>
                                <input type="text" class="form-control bg-white" id="fullname"
                                    placeholder="اسم المدرب الرباعي" required>
                            </div>
                            <div class="mb-3">
                                <label for="bio" class="form-label">
                                    نبذة شخصية<span class="text-danger">*</span>
                                </label>
                                <input type="text" class="form-control bg-white" id="bio" placeholder="نبذة شخصية"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">
                                    البريد الالكتروني <span class="text-danger">*</span>
                                </label>
                                <input type="email" class="form-control bg-white" id="email"
                                    placeholder="البريد الالكتروني " required>
                            </div>

                            <div class="mb-3">
                                <label for="phone" class="form-label">
                                    رقم الجوال<span class="text-danger">*</span>
                                </label>
                                <input type="text" class="form-control bg-white" id="phone" placeholder="رقم الجوال"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="address" class="form-label">
                                    عنوان اللقاء<span class="text-danger">*</span>
                                </label>
                                <input type="text" class="form-control bg-white" id="address" placeholder="عنوان اللقاء"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="why" class="form-label">محاور اللقاء</label>
                                <input type="email" class="form-control bg-white" id="why" placeholder="محاور اللقاء">
                            </div>
                            <div class="mb-3">
                                <label for="level" class="form-label">مستوي اللقاء</label>
                                <input type="email" class="form-control bg-white" id="level" placeholder="مستوي اللقاء">
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-6 col-lg-3">
                                    <button type="submit"
                                        class="btn btn-primary   btn-block w-100 mt-3">ارسال</button>

                                </div>
                            </div>
                        </form>
                    </div>
             
                    <div class="col-sm-12 mt-5 mb-3">
                        <h6 class="fw-bold">
                            شركاء أبعاد
                        </h6>
                        <p class="text-gray-6">

                            تعمل شركة أبعاد مع شبكة الشركاء والشركات لتوفر لكم سبل الوصول إلى قدرات رائدة في مجالات
                            الإدارة و إدارة المشاريع والتصميم، والتقنية. شركاؤنا من النخبة في مجالاتهم حيث تم اختيارهم
                            بعناية بناءً على سجلهم الحافل بالإيجابيات والقيم والأخلاقيات التي يتمتعون بها في خدمة
                            العملاء. وإجمالاً فإنهم يشكلون مجموعة من الخبرات في اختصاصاتهم قل أن تجد مثيلا لها في
                            المنطقة.

                        </p>
                    </div>

                </div>
            </section>


        </div>

    </main>
    <footer>
        <!-- contact us -->
        <section class="bg-secondary py-4">
            <div class="container">
                <div class="row align-items-center" >
                    <div class="col-sm-12 col-md-6 col-lg-4" data-aos="fade-right"  data-aos-duration="2000">
                        <div class="contact-info d-inline-flex gap-2">
                            <div class="contact-icon rounded-circle overflow-hidden bg-primary-subtle text-primary">
                                <ion-icon name="mail-outline"></ion-icon>
                            </div>

                            <div class="">
                                <h6 class="mb-1 fw-bold">
                                    التواصل مع شركة ابعاد
                                </h6>
                                <p class="mb-0 text-gray-6 sub-info">
                                    التواصل مع الذكاء الاصطناعي أو موظف خدمة الشركاء
                                </p>

                            </div>

                        </div>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-8" data-aos="fade-left"  data-aos-duration="2000">
                        <label for="fullname" class="form-label">
                            يمكنك التواصل مع الذكاء الاصطناعي أو موظف خدمة الشركاء
                        </label>
                        <form class="d-flex" role="search">
                           
                            <input class="form-control ms-2 w-100 bg-white" type="search" placeholder="ادخل البريد الالكترونى"
                                aria-label="Search">
                            <button class="btn btn-primary px-5" type="submit">ارسال</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        <div class="mb-5">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-4 col-lg-3">
                        <h6 class="fw-bold">
                            عن ابعاد
                        </h6>
                        <p class="text-gray-6">
        
                            تأسست في المملكة العربية السعودية في ظل رؤية المملكة 2030 تخصصت في مجال تقنية المعلومات ومنها انطلقت "منصة أبعاد للتدريب وهي منصة رقمية سحابية لتقديم الخدمات التدريبية وتحكيمها وفق الاشتراطات والمعايير وبجودة واحترافية عالية.
        
                        </p>
                    </div>
                    <div class="col-sm-12 col-md-8 col-lg-6">
                        <div class="row">
                            <div class="col-md-4">
                                <h6 class="fw-bold">
                                    حسابى
                                </h6>
                                <ul  class="footer-list">
                                    <li>
                                        حسابى
                                    </li>
                                    <li>
                                        منطلقاتي
                                    </li>
                                    <li>
                                        خدماتي
                                    </li>
                                    <li>
                                        الرؤية
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h6 class="fw-bold">
                                    روابط مهمة
                                </h6>
                                <ul  class="footer-list">
                                    <li>
                                        من نحن
                                    </li>
                                    <li>
                                        ساسية الخصوصية
                                    </li>
                                    <li>
                                        الشروط والاحكام
                                    </li>
                                    <li>
                                        الدعم الفنى
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h6 class="fw-bold">
                                    تواصل معنا
                                </h6>
                                <ul class="footer-list">
                                    <li>
                                        واتساب
                                         : 0504883053
                                    </li>
                                    <li>
                                        موبايل
                                         : 0504883053
                                    </li>
                                    <li>
                                        البريد
                                         : info@dcs4d.com
                                    </li>
                                 
                                </ul>
                            </div>
                        </div>
                      
                    </div>
                    
                    <div class="col-sm-12 col-md-12 col-lg-3">
                        <h6 class="fw-bold">
                            تابعنا على
                        </h6>
                        <div class="d-flex gap-2 flex-wrap mt-4">
                            <button type="button" class="btn btn-outline-primary rounded-circle">
                                <i class='bx bxl-facebook'></i>
                              
                            </button>
                            <button type="button" class="btn btn-outline-primary rounded-circle">
                                <i class='bx bxl-twitter' ></i>
                            </button>
                            <button type="button" class="btn btn-outline-primary rounded-circle">
                                <i class='bx bxl-instagram' ></i>
                            </button>
                            <button type="button" class="btn btn-outline-primary rounded-circle">
                                <i class='bx bxl-snapchat' ></i>
                            </button>
                        </div>
                    </div>
                </div>
        </div>
      
        </div>
       
    </footer>
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
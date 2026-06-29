// images
import heroImage from "@assets/images/hero-right-banner.png";
import userIcon from "@assets/images/user.svg";
import locationIcon from "@assets/images/location.svg";
import serverIcon from "@assets/images/server.svg";
import featuresImage from "@assets/images/features-banner.png";
import tickIcon from "@assets/images/tick.svg";
import priceImage from "@assets/images/price-image.png";
import mapImage from "@assets/images/map.png";
// images


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Index() {

  const numbersData = [
    { title: '90+', desc: 'Users', img: userIcon },
    { title: '30+', desc: 'Locations', img: locationIcon },
    { title: '50+', desc: 'Servers', img: serverIcon },
  ];

  const featuresData = [
    { title: 'Powerfull online protection.' },
    { title: 'Internet with borders' },
    { title: 'Supercharged VPN' },
    { title: 'No specific time limits' }
  ];

  const plans = [
    {
      title: "Free",
      price: "Free",
      features: ["Unlimited bandwidth", "Encrypted connection", "Yes trafic logs"],
    },
    {
      title: "Standard plan",
      price: "9",
      period: "/ mo",
      features: [
        "Unlimited bandwidth",
        "Encrypted connection",
        "Yes trafic logs",
        "Works on all devices",
        "Connect anyware",
      ],
    },
    {
      title: "Premium plan",
      price: "$ 12",
      period: "/ mo",
      features: [
        "Unlimited bandwidth",
        "Encrypted connection",
        "Yes trafic logs",
        "Works on all devices",
        "Connect anyware",
        "Get new features",
      ],
    },
  ];

  const reviews = [
    {
      name: "Brooklyn Simmons",
      location: "Warsaw, Poland",
      rate: "4.5",
      image: "./reviews/person-1.png",
      comment:
        "Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    },
    {
      name: "Darlene Robertson",
      location: "Warsaw, Poland",
      rate: "4.5",
      image: "./reviews/person-2.png",
      comment:
        "Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    },
    {
      name: "Darrell Steward",
      location: "Warsaw, Poland",
      rate: "4.5",
      image: "./reviews/person-3.png",
      comment:
        "Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    },
    {
      name: "Darlene Robertson",
      location: "Warsaw, Poland",
      rate: "4.5",
      image: "./reviews/person-2.png",
      comment:
        "Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    },
    {
      name: "Darrell Steward",
      location: "Warsaw, Poland",
      rate: "4.5",
      image: "./reviews/person-3.png",
      comment:
        "Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    },

  ];

  return (
    <>
      <section className="hero_section">
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className="hero_left">
                <div className="hero_left__title">
                  Want anything to be easy with <b>LaslesVPN</b>
                </div>

                <div className="hero_left__desc">
                  Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper.
                  Vel vel erat semper augue.
                </div>

                <a href="#" className="button-type--1">Get started</a>
              </div>
            </Col>

            <Col xs={12} lg={6} className="text-center mt-lg-0 mt-4">
              <img src={heroImage} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="numbers_section">
        <Container>
          <Row>
            {numbersData.map((item) => (
              <Col xs={4} lg={4} className="number_div" key={item.title}>
                <div className="numbers_section__card">
                  <div className="numbers_section__card__icon">
                    <img src={item.img} alt="User Card 1" className="img-fluid" />
                  </div>
                  <div className="numbers_section__card__text">
                    <div className="numbers_section__card__text__title">{item.title}</div>
                    <div className="numbers_section__card__text__desc">{item.desc}</div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="features_section" id="features">
        <Container>
          <Row>
            <Col xs={12} lg={6} className="mb-4">
              <img src={featuresImage} alt="" className="img-fluid" />
            </Col>

            <Col xs={12} lg={6}>
              <div className="features_section__content">
                <div className="features_section__content__title">
                  We provide many features you can use
                </div>
                <div className="features_section__content__desc">
                  Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
                </div>
                <ul>
                  {featuresData.map((item) => (
                    <li><img src={tickIcon} alt="{item.title}" />{item.title}</li>
                  ))}
                </ul>
              </div>
            </Col>


          </Row>
        </Container>
      </section>

      <section className="pricing_section" id="pricing">

        <Container>
          <div className="pricing_section__header">
            <h2>Choose your plan</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
          </div>

          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {plans.map((plan) => (
              <SwiperSlide key={plan.title}>
                <div className="pricing_card">
                  <img src={priceImage} alt="" />
                  <div className="pricing_card__title">{plan.title}</div>

                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}><img src={tickIcon} alt="" /> {feature}</li>
                    ))}
                  </ul>

                  <div className="pricing_card__price">{plan.price} <span>{plan.period}</span></div>

                  <a href="" className="button-type--1">Select</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


        </Container>

      </section>

      <section className="map_section">

        <Container>
          <div className="pricing_section__header">
            <h2>Huge global network<br></br>of fast VPN</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
          </div>
          <img src={mapImage} alt="" className="w-100 img-fluid mt-lg-5 mt-3" />


        </Container>

      </section>

      <section className="customer_section" id="testimonial">

        <Container>
          <div className="pricing_section__header">
            <h2>Trusted by thousands of<br></br>happy customer</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={10}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              992: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="testimonial_slider"

          >
            {reviews.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="testimonial_card">
                  <div className="testimonial_card__top">
                    <img src={item.image} alt={item.name} />

                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.location}</p>
                    </div>

                    <div className="testimonial_card__rate">
                      {item.rate} ⭐
                    </div>
                  </div>

                  <p className="testimonial_card__text">
                    “{item.comment}”
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>

      </section>

      <section className="subscribe_section">
        <Container>
          <div className="subscribe_section__box">
            <div className="subscribe_section__box__left">
              <div className="subscribe_section__box__left__title">Subscribe now for<br></br>get special features!</div>
              <p>Lorem ipsum dolor sit amet </p>
            </div>
            <a href="#" className="button-type--1">Subscribe now</a>
          </div>
        </Container>
      </section>



    </>
  );
}

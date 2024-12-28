import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function ContentTwo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className="container-fluid p-0" style={{ color: "white" }}>
                <div
                    id="header-carousel"
                    className="carousel slide carousel-fade"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                className="w-100"
                                src="/asset/img/carousel-1.jpg"
                                alt="image"
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h5
                                        className="text-uppercase mb-3 animated slideInDown"
                                        style={{ color: "white" }}
                                    >
                                        Let food be thy medicine, and let nature be thy healer
                                    </h5>
                                    <h1
                                        className="display-1 mb-md-4 animated zoomIn"
                                        style={{ color: "white" }}
                                    >
                                        Take The Best Quality Holistic Therapies Treatment
                                    </h1>
                                    <Link
                                        className="btn btn-appointment py-md-3 px-md-5 me-3 animated slideInLeft"
                                        to="/appointment"
                                    >
                                        Appointment
                                    </Link>
                                    <Link
                                        className="btn btn-contact py-md-3 px-md-5 me-3 animated slideInRight"
                                        to="/contact"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                className="w-100"
                                src="/asset/img/carousel-2.jpg"
                                alt="image"
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h5
                                        className="text-uppercase mb-3 animated slideInDown"
                                        style={{ color: "white" }}
                                    >
                                        Let food be thy medicine, and let nature be thy healer
                                    </h5>
                                    <h1
                                        className="display-1 mb-md-4 animated zoomIn"
                                        style={{ color: "white" }}
                                    >
                                        Take The Best Quality Holistic Therapies Treatment
                                    </h1>
                                    <Link
                                        className="btn btn-appointment py-md-3 px-md-5 me-3 animated slideInLeft"
                                        to="/appointment"
                                    >
                                        Appointment
                                    </Link>
                                    <Link
                                        className="btn btn-contact py-md-3 px-md-5 me-3 animated slideInRight"
                                        to="/contact"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="prev"
                    >
                        <span
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#header-carousel"
                        data-bs-slide="next"
                    >
                        <span
                            className="carousel-control-next-icon"
                            aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ContentTwo;

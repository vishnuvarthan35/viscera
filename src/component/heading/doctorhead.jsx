import React from "react";

function DoctorHead() {
    return (
        <>
            {/* Hero Start */}
            <div className="container-fluid bg-primary py-5 hero-header mb-5">
                <div className="row py-3">
                    <div className="col-12 text-center">
                        <h1 className="display-3 text-white animated zoomIn">Our Doctors</h1>
                        <a href className="h4 text-white">Home</a>
                        <i className="far fa-circle text-white px-2" />
                        <a href className="h4 text-white">Doctors</a>
                    </div>
                </div>
            </div>
            {/* Hero End */}
        </>
    )
}

export default DoctorHead;

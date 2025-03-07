
interface detailProps {
    detail: {
        name: string;
        designation: string;
        image: string;
    }
}

function Team({ detail }: detailProps) {
    return (
        <div className="col-md-4 my-3">
            <div className="card shadow-lg border-0 rounded-3 p-4">
                <img
                    src={detail.image}
                    className="card-img-top rounded-circle"
                    alt={`${detail.name} - ${detail.designation}`}
                />
                <div className="card-body text-center">
                    <h5 className="card-title">{detail.name}</h5>
                    <p className="card-text">{detail.designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Team

export default function WorkItems({ item }) {

    return (
        <div className="work__card" key={item.id}>
            <div className="work__img">
                <img src={item.image} alt="Work image"/>
            </div>

            <div className="work__content">
                <h3 className="work__title">{item.title}</h3>
                <a href="#" className="work__button">
                    Demo<i className="bx bx-right-arrow-alt work__button-icon"></i>
                </a>
            </div>
        </div>
    )
};
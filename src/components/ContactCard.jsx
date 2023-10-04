import userImg from "../images/user.png"

function ContactCard({contact, removeContactHandler}) {
    const { id, name, email, number } = contact

    const handleRemoveClick = () => {
        removeContactHandler(id);
    };

    return (
        <div key={id} className="flex justify-center">
            <div className="flex justify-around pt-10 w-[800px] align-middle">
                <img src={userImg} className=" h-[80px]"/>
                <div className="text-2xl ml-3">
                    <div>{name}</div>
                    <div>{email}</div>
                    <div>{number}</div>
                </div>
                <button onClick={handleRemoveClick}
                    className="flex bg-red-800 h-[50px] rounded-lg p-3 ml-5 mt-6 text-right">Delete</button>
            </div>
        </div>
    )
}

export default ContactCard;
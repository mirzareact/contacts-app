import React from "react";

class AddContact extends React.Component{
    state = {
        name: "",
        email: "",
        number: ""
    }

    add = (e) => {
        e.preventDefault()
        if (this.state.name === "" || this.state.email === "" || this.state.number === "") {
            alert("Fields are empty")
            return
        }
        this.props.addContactHandler(this.state)
        this.setState({name:"", email: "", number: ""})
    }

    render() {
        return (
            <div className="p-10">
                <h2 className="text-center p-4 text-2xl font-bold">Add Contact</h2>
                <div className="flex justify-center"> 
                    <form onSubmit={this.add}>
                        <div className="block w-[400px]">
                            <label className="block">Name:</label>
                            <input onChange={(e) => { this.setState({ name: e.target.value }) }}
                                id="name" type="text" name="name"
                                value={this.state.name}
                                className="h-[50px] w-full bg-gray-100 border-[1px] text-m border-blue-300 pl-2 rounded-lg focus:border-[1px]" />
                        </div>
                        <div className="block">
                            <label >Email:</label>
                            <input onChange={(e) => { this.setState({ email: e.target.value }) }}
                                id="email" type="email" name="email"
                                value={this.state.email}
                                className="h-[50px] w-full bg-gray-100 border-[1px] text-m border-blue-300 pl-2 rounded-lg focus:border-[1px]" />
                        </div>
                        <div className="block">
                            <label >Number:</label>
                            <input onChange={(e) => { this.setState({ number: e.target.value }) }}
                                id="number" type="text" name="number"
                                value={this.state.number}
                                className="h-[50px] w-full bg-gray-100 border-[1px] text-m border-blue-300 pl-2 rounded-lg focus:border-[1px]" />
                        </div>
                        <div className="pt-8 flex justify-center">
                            <button className="bg-blue p-4 bg-blue-500 rounded-xl hover:bg-green-500">Add Contact</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact
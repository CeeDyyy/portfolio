import React from 'react'
import Card from './Card'
import "./Work.css"

function Work() {
    return (
        <div className="container">
            <div className="work-text">
                <h1>WORK</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <Card
                        img="https://images.unsplash.com/photo-1626483641739-96422935eb93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1020&q=80"
                        title="Title 1"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore"
                    />
                </div>
                <div class="col">
                    <Card
                        img="https://images.unsplash.com/photo-1602031939957-fe52480030bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
                        title="Title 2"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore"
                    />
                </div>
                <div class="col">
                    <Card
                        img="https://images.unsplash.com/photo-1583328439472-8130d925d63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80"
                        title="Title 3"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore"
                    />
                </div>
                <div class="col">
                    <Card
                        img="https://images.unsplash.com/photo-1626187972321-a82ad6104ff8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
                        title="Title 4"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quaerat minima sapiente labore"
                    />
                </div>
            </div>
        </div>
    )
}

export default Work
import React,{Component} from'react'

class Home extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         title:"ABC",
         description:"This Is ABC"
      }
    }
    
    render(){ 
        const {name,heroname,children}=this.props
        return( 
          
          <div>
            <h2>Home Class Component</h2>
            <h2>Home Class Componet {name}</h2>
            {children}
            <h2>{this.state.title}</h2>
            <h2>{this.state.description}</h2>
          </div>
       
        )
    }
}
export default Home


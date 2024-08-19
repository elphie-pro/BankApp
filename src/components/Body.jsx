import React from 'react'
import '../css/body.css'
import { useNavigate } from 'react-router-dom'

const Body = () => {
    const navigate = useNavigate()

  return (
    <>
    <div className="bod">
        <div className="header">
        <h2 className='wel'>Welcome to Elp</h2><h2 className='well'>Bank</h2>
        <br />
        <h3 className='desc'>The Best Bank For All Your Funds</h3>
        </div>
        <p className="head">
            What Make us different?
        </p>
        <p className="lor">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a ipsa nemo reiciendis totam, 
            maiores aliquid nobis quam. Quas, quam? Saepe, fugit nam molestias placeat natus facere porro illum, 
            eligendi quo ullam recusandae. Ipsa doloribus, quos odio in consequuntur culpa repellat architecto, nihil fuga 
            maiores hic adipisci rem nisi illo tempora odit. Architecto incidunt, exercitationem nemo alias ipsam
            eum quisquam iste quasi sunt obcaecati quam inventore dolorum modi veniam aliquam iusto quia fugit ipsa
            quibusdam corporis! Quibusdam ipsum, blanditiis minus corporis voluptatum quo sint distinctio tenetur
            nulla ex accusantium esse ut? Error tempora nisi voluptatum aspernatur? Ea, illo. Repellendus minus voluptatem,
            esse quo id dolores placeat incidunt deserunt sint, inventore vitae accusamus voluptate facilis ex enim in autem natus earum,
            saepe ipsum qui eligendi repellat cumque excepturi. Officiis neque cumque cum nihil veniam nemo reiciendis recusandae facere labore?
            Necessitatibus accusamus libero maxime magnam reprehenderit fugiat facere adipisci sint nisi ipsum!
        </p>
        <p className="head2">
            Why Have An Account With Us?
        </p>
        <div>
            <p className="lor2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut animi recusandae inventore, 
            consectetur molestias delectus esse nostrum et alias quisquam facere id repudiandae dolorum nisi, 
            aperiam velit quis tempore quidem enim illum. Atque id facere ipsum, dicta aspernatur distinctio tempora 
            autem vero velit ipsam nostrum fuga obcaecati veritatis, eos adipisci consequatur dignissimos debitis quaerat
            explicabo, assumenda ab qui incidunt expedita. Rem quas at aut cupiditate, quidem nisi. Odit consequatur natus eaque sed,
            asperiores, quaerat ratione voluptas, sit veniam libero minima autem aperiam saepe. Soluta accusamus incidunt in similique ex
            obcaecati laboriosam dolore dignissimos velit, corrupti, recusandae voluptatibus, vero consequuntur praesentium dolores 
            possimus nihil enim! Neque dolore sit blanditiis dolorem consequatur, voluptatibus aspernatur molestias repudiandae quae. 
            Culpa est quibusdam, distinctio expedita accusantium deserunt aspernatur corporis! Hic rerum deserunt repellendus aut.
            Modi amet quidem quaerat. Perferendis iure at aperiam, aliquid consequatur omnis impedit ut dolores corrupti quae numquam incidunt ipsa ab quibusdam alias? 
            Iste repellendus ipsum optio blanditiis incidunt harum vero inventore!
            </p>
        </div>

        <button className="btn" onClick={() => {
            navigate('/login')
        }}>
            Proceed To Login
        </button>
    </div>
    </>
  )
}

export default Body

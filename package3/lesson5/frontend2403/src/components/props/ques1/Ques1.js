import React from 'react'
import Ques1Item from './Ques1Item'

const ques1s = [
  {
    id: '1',
    fullName: 'le',
    age: '16',
    children: '1',
  },
  {
    id: '2',
    fullName: 'duy',
    age: '17',
    children: '2',

  },
  {
    id: '3',
    fullName: 'bao',
    age: '18',

  },
]
const Ques1 = () => {
  return (
    <div>
      {
        ques1s.map((ques1) => {
          return (

            // <Ques1Item ques1Item={ques1} title={"Không có lý tưởng sống"} key={ques1.id} />
            <Ques1Item
              ques1Item={{ ...ques1, slogan: "Không có lý tưởng sống" }}
              key={ques1.id}
            >
              <p>This is children {ques1.children || 'ko co'}</p>
            </Ques1Item>
            // <Ques1Item
            //   fullName={ques1.fullName}
            //   age={ques1.age}
            //   title={"Không có lý tưởng sống"}
            //   key={ques1.id} />
          )
        })
      }
    </div>
  )
}
// Ques1Item.defaultProps = {
//   title: "Không có lý tưởng sống",
// }
export default Ques1
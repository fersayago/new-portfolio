import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { IService } from './type'

export const services:IService[] = [
  {
    title: "Frontend Development",
    about: "Build beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React</b>",
    Icon: RiComputerLine
  },
  {
    title: "Backend Development",
    about: "handle database, server, api using <b>Express</b> & other popular frameworks",
    Icon: FaServer
  },
  {
    title: "API Development",
    about: "I can develop robust REST API using <b>Node API</b>",
    Icon: AiOutlineApi
  },
  {
    title: "Constantly Improving",
    about: "A daily problem solver in <b>Codewars</b> and <b>freecodecamp</b>",
    Icon: FaServer
  }
]
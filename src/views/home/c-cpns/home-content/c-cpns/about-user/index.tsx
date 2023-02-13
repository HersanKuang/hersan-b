import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserWrapper } from '@/views/home/c-cpns/home-content/c-cpns/about-user/style'

interface IProps {
  children?: ReactNode
}

const AboutUser: FC<IProps> = () => {
  return (
    <UserWrapper>
      <div className="info">
        <h2>About ME</h2>
        <table>
          <tbody>
            <tr>
              <td>name: Hersan</td>
              <td>github: https://github.com/HersanKuang</td>
            </tr>
            <tr>
              <td>gender: male</td>
              <td>email: mlnrmsw@gmail.com</td>
            </tr>
            <tr>
              <td>birthdate: 1999-12</td>
              <td>phone: 15992199471</td>
            </tr>
            <tr>
              <td>specialty: CAT(computer application technology)</td>
              <td>working time: 2021.08 - now</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="banner">
        <img
          className="album"
          src={require('@/assets/img/banner.jpg')}
          alt="封面"
        />
      </div>
      <div className="advantage">
        <h2>personal advantage</h2>
        <ul>
          <li>1. Skilled in HTML, CSS, solid JS foundation.</li>
          <li>
            2. Skilled in using Less/Scss precompile, able to accurately restore
            UI design draft.
          </li>
          <li>
            3. Proficient in Vue2/Vue3 family buckets (Options api, Vue-router,
            vuex/Composition api, pinia, script setup)
          </li>
          <li>
            4. Proficient in using React buckets (React-router, Hooks,
            React-Redux, redux-thunk, Redux-Toolkit)
          </li>
          <li>
            5. Proficient in using uniapp cross-platform framework, compatible
            with app, h5, wechat small program multi-end development.
          </li>
          <li>
            6. Familiar with TypeScript, ES Next and hands-on experience in
            several projects.
          </li>
          <li>
            7. Experience in development of component libraries such as Ant
            Design, Element, Vant, Echarts etc.
          </li>
          <li>
            8. Be familiar with npm, yarn, and pnpm package management tools and
            understand their design principles.
          </li>
          <li>
            9. Understand front-end engineering, modularization, familiar with
            Vite, Webpack and other front-end construction tools.
          </li>
        </ul>
      </div>
    </UserWrapper>
  )
}

export default memo(AboutUser)

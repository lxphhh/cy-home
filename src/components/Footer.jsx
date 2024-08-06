import Link from 'next/link'

import { Container } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {/* <NavLink href="/about">关于我们</NavLink>
                <NavLink href="/projects">摄影</NavLink>
                <NavLink href="/speaking">妆造</NavLink>
                <NavLink href="/uses">谷子</NavLink>
                <NavLink href="/uses">漫展</NavLink> */}
                <div>关于我们</div>
                <div>摄影</div>
                <div>妆造</div>
                <div>谷子</div>
                <div>漫展</div>
                {/* 摄影、妆造、谷子、漫展    */}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} - {new Date().getFullYear()}
                &nbsp; 上海寻常信息技术有限公司 版权所有&nbsp; &nbsp;
                <a
                  href="https://beian.miit.gov.cn/#/Integrated/index"
                  target="_blank"
                  rel="noreferrer"
                >
                  沪ICP备2024083804号
                </a>
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

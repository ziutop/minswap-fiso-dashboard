import * as React from 'react';

import { IconProps } from './props';

export function MincatSuccessIcon(props: IconProps): React.ReactElement<IconProps> {
  return (
    <svg
      height="220"
      viewBox="0 0 220 220"
      width="220"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <defs>
        <filter filterUnits="objectBoundingBox" height="280%" id="0vakgyc9fa" width="280%" x="-90%" y="-90%">
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="30" />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.0739156672 0 0 0 0 0.155358967 0 0 0 0 0.356520058 0 0 0 0.0633510776 0"
          />
        </filter>
        <filter filterUnits="objectBoundingBox" height="141.4%" id="kbac5aidvc" width="144.4%" x="-22.2%" y="-20.7%">
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="3" />
          <feColorMatrix
            in="shadowBlurOuter1"
            result="shadowMatrixOuter1"
            values="0 0 0 0 0.0605271969 0 0 0 0 0.0902235391 0 0 0 0 0.263002257 0 0 0 0.101214215 0"
          />
          <feMerge>
            <feMergeNode in="shadowMatrixOuter1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter filterUnits="objectBoundingBox" height="165%" id="0hsx5h7nzf" width="165%" x="-32.5%" y="-32.5%">
          <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6.5" />
          <feColorMatrix
            in="shadowBlurOuter1"
            values="0 0 0 0 0.0605271969 0 0 0 0 0.0902235391 0 0 0 0 0.263002257 0 0 0 0.102950516 0"
          />
        </filter>
        <circle cx="30" cy="30" id="n6ap6s528g" r="30" />
        <rect height="100" id="klpiwct09b" rx="30" width="100" x="0" y="0" />
        <path d="M0 0L54 0 54 58 0 58z" id="cxx7xd2zed" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <g>
          <g>
            <g>
              <g
                opacity=".298"
                transform="translate(-595.000000, -174.000000) translate(655.000000, 214.000000) translate(0.000000, 20.000000)"
              >
                <use fill="#000" filter="url(#0vakgyc9fa)" xlinkHref="#klpiwct09b" />
                <use fill="#4CD964" xlinkHref="#klpiwct09b" />
              </g>
              <g
                filter="url(#kbac5aidvc)"
                transform="translate(-595.000000, -174.000000) translate(655.000000, 214.000000) translate(0.000000, 20.000000) translate(23.000000, 21.000000)"
              >
                <g>
                  <mask fill="#fff" id="zfj6q53s1e">
                    <use xlinkHref="#cxx7xd2zed" />
                  </mask>
                  <path
                    d="M52.949 30.048c-3.095-9.82-11.66-16.55-21.552-17.864 9.467-2.166 12.732 1.325 12.732 1.325 2.178-9.527-5.362-13.51-5.362-13.51-4.602 2.877-8.971 9.075-10.845 11.954-11.035-.02-18.675 7.394-18.675 7.394 2.289-6.809 12.398-9.484 12.398-9.484-.622-10.68-9.2-9.102-9.2-9.102S-9.658 31.61 5.047 48.3c11.592 13.157 30.624 10.863 39.476 5.191 6.359-4.074 11.846-12.586 8.425-23.444"
                    fill="#FFF"
                    mask="url(#zfj6q53s1e)"
                  />
                </g>
                <path
                  d="M31.527 15.919c-.464-.242-.19-.956.314-.817 6.938 1.907 21.353 8.104 17.31 26.168-1.33 5.948-6.58 11.08-13.285 11.931-8.134 1.034-14.062-2.269-13.767-6.801.79-12.166 22.227 1.817 20.562-16-.65-6.948-3.157-10.333-11.134-14.481"
                  fill="#446670"
                  opacity=".15"
                />
                <path
                  d="M17.04 31.236c.006.002.025.021.043.039l.056.053c.04.038.077.075.12.112.081.076.167.15.254.222.086.073.179.142.266.214l.275.2c.372.26.768.476 1.17.654.806.361 1.663.518 2.528.5.104.003.223-.008.34-.016l.347-.023c.23-.032.462-.052.69-.096.459-.067.906-.189 1.352-.315.442-.14.877-.304 1.296-.5.213-.094.416-.204.617-.313.098-.055.199-.111.292-.17.047-.028.095-.056.138-.085l.065-.04c.018-.012.045-.031.046-.028.396-.362 1.008-.33 1.365.072s.325 1.02-.072 1.382l-.104.1-.088.081c-.059.054-.117.103-.174.152-.117.099-.234.188-.353.278-.238.174-.482.336-.734.484-.503.294-1.03.544-1.574.745-1.096.392-2.237.617-3.409.628-1.217.008-2.457-.274-3.519-.857-.534-.282-1.029-.627-1.476-1.02-.22-.201-.435-.406-.632-.63-.099-.113-.196-.226-.29-.346-.046-.058-.092-.123-.138-.185l-.07-.099-.078-.116c-.264-.388-.166-.919.217-1.186.25-.173.559-.192.817-.078l.418.187zM40.451 30.906l.226.124c.084.047.17.092.257.136.174.089.354.168.534.245.36.154.727.279 1.09.376.366.098.73.162 1.085.181.357.035.7.004 1.033-.05.331-.052.664-.177.998-.315.333-.153.662-.342.986-.556.32-.222.635-.466.937-.733.152-.131.301-.269.444-.41.073-.071.141-.143.21-.215l.19-.199.063-.067c.368-.386.974-.397 1.356-.026.34.331.385.855.132 1.238-.088.133-.152.225-.228.33-.074.101-.15.2-.228.297-.155.194-.316.381-.483.564-.337.362-.703.704-1.1 1.018-.4.313-.837.591-1.305.835-.244.11-.48.23-.742.312-.13.043-.255.092-.388.127l-.405.097c-1.09.22-2.193.11-3.173-.187-.494-.147-.966-.337-1.415-.563-.223-.117-.442-.239-.657-.371-.107-.066-.214-.134-.32-.206-.11-.077-.2-.143-.334-.245-.465-.357-.555-1.027-.203-1.496.32-.426.893-.541 1.343-.294l.097.053zM33.35 34.892h3.947c.751 0 1.36.66 1.36 1.474v.103c0 .421-.165.822-.456 1.102l-.98.724c-.722.565-.968 1.331-.986 1.894h-1.824c-.018-.587-.035-1.136-.869-1.81l-1.116-.93c-.28-.279-.438-.671-.438-1.083 0-.814.61-1.474 1.361-1.474"
                  fill="#1A2B31"
                />
                <path
                  d="M41.189 40.025c-.608-.033-1.127.434-1.17 1.046v.003c.002.002.001.01 0 .019-.001.017-.002.034-.006.055-.004.04-.015.085-.024.13-.022.09-.052.181-.088.271-.075.18-.178.35-.314.502-.258.314-.654.555-1.114.728-.474.171-1.007.29-1.457.278-.231 0-.441-.04-.626-.102-.048-.015-.088-.036-.133-.052-.033-.02-.071-.036-.103-.056l.116-3.794v-.06c-.017-.56-.506-.993-1.07-.921-.49.063-.838.521-.823 1.022l.11 3.59c-.1.038-.199.075-.302.106-.124.046-.255.07-.382.107-.128.03-.258.05-.385.076-.516.081-1.028.07-1.505-.031-.477-.102-.929-.277-1.328-.563-.211-.117-.39-.303-.58-.458l-.071-.06-.064-.073-.128-.143-.258-.283-.083-.091-.02-.021c-.427-.444-1.143-.48-1.606-.073-.54.476-.537 1.306-.023 1.778l.402.37.202.181.1.091.114.081c.305.212.591.44.935.6.65.365 1.393.58 2.128.657.737.08 1.473.013 2.16-.165.17-.05.342-.096.508-.153.165-.063.332-.115.492-.19l.004-.002c.24-.1.508-.093.736.032.064.035.128.067.193.097.381.172.778.27 1.158.306.382.039.756.033 1.113-.01.179-.02.358-.043.528-.08.172-.032.345-.068.523-.123.701-.198 1.434-.538 2.026-1.124.3-.285.556-.626.754-1.001.1-.188.184-.385.254-.59.033-.105.067-.208.092-.32.014-.054.026-.114.037-.173l.015-.096c.005-.034.01-.063.015-.132.033-.622-.438-1.152-1.052-1.186"
                  fill="#1A2B31"
                />
                <path d="M40.019 41.07l-.002.02.002-.02" fill="#010202" />
              </g>
            </g>
            <g>
              <g transform="translate(-595.000000, -174.000000) translate(655.000000, 214.000000) translate(71.000000, 0.000000)">
                <use fill="#000" filter="url(#0hsx5h7nzf)" xlinkHref="#n6ap6s528g" />
                <use fill="#FFF" xlinkHref="#n6ap6s528g" />
              </g>
              <g fill="#4CD964" fillRule="nonzero">
                <path
                  d="M27.862.377L10.589 18.066c-.234.241-.553.377-.885.377-.332 0-.651-.136-.886-.377l-6.68-6.848c-.234-.24-.552-.376-.885-.376-.332 0-.65.135-.885.376-.236.24-.368.567-.368.907 0 .34.132.667.368.907l6.682 6.843c1.467 1.5 3.844 1.5 5.312 0l17.27-17.686c.236-.24.368-.566.368-.906 0-.34-.132-.666-.367-.906C29.398.136 29.08 0 28.747 0c-.332 0-.65.136-.885.377z"
                  transform="translate(-595.000000, -174.000000) translate(655.000000, 214.000000) translate(71.000000, 0.000000) translate(15.000000, 20.000000)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

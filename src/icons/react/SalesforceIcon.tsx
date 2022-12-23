/**
  * DO NOT EDIT',
  * Generated by fds-dictionary on Fri Dec 23 2022 12:15:19 GMT-0500 (Colombia Standard Time)
  * github.com/cbinsights/form-design-system/
  */

import React from 'react';
import { IconProps } from 'components/Icon';

const SalesforceIcon = ({
  size = 's',
  color,
  customSize,
}: IconProps): JSX.Element => (
  <div
    className={`fds-icon fds-icon--${size}`}
    style={{
      fill: color,
      width: customSize && `${customSize}px`,
      height: customSize && `${customSize}px`,
    }}
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g fillRule="evenodd">
		<g>
			<path d="M7,3 C3.699219,3 1,5.699219 1,9 C1,9.445313 1.105469,9.828125 1.195313,10.21875 C0.488281,11.136719 0,12.246094 0,13.5 C0,16.492188 2.425781,18.925781 5.40625,18.980469 C6.414063,20.164063 7.828125,21 9.5,21 C11.175781,21 12.597656,20.160156 13.605469,18.972656 C15.238281,18.9375 16.613281,18.121094 17.597656,16.960938 C17.734375,16.976563 17.835938,17 18,17 C21.300781,17 24,14.300781 24,11 C24,7.699219 21.300781,5 18,5 C17.382813,5 16.824219,5.1875 16.265625,5.359375 C15.386719,4.566406 14.28125,4 13,4 C12.238281,4 11.59375,4.332031 10.945313,4.640625 C9.886719,3.675781 8.546875,3 7,3 Z M7,5 C8.195313,5 9.242188,5.527344 9.984375,6.367188 L10.570313,7.03125 L11.300781,6.53125 C11.789063,6.195313 12.367188,6 13,6 C13.910156,6 14.707031,6.410156 15.265625,7.0625 L15.746094,7.617188 L16.421875,7.328125 C16.910156,7.117188 17.4375,7 18,7 C20.21875,7 22,8.78125 22,11 C22,13.21875 20.21875,15 18,15 C17.855469,15 17.671875,14.972656 17.425781,14.9375 L16.789063,14.84375 L16.4375,15.386719 C15.8125,16.355469 14.742188,17 13.5,17 C13.574219,17 13.519531,16.988281 13.3125,16.976563 L12.738281,16.941406 L12.421875,17.421875 C11.792969,18.375 10.726563,19 9.5,19 C8.273438,19 7.207031,18.375 6.578125,17.421875 L6.261719,16.941406 L5.6875,16.976563 C5.480469,16.988281 5.425781,17 5.5,17 C3.554688,17 2,15.445313 2,13.5 C2,12.570313 2.363281,11.742188 2.960938,11.109375 L3.351563,10.6875 L3.1875,10.136719 C3.070313,9.742188 3,9.371094 3,9 C3,6.78125 4.78125,5 7,5 Z M8.265625,9 C8.246094,9 8.230469,9.019531 8.230469,9.039063 L8.230469,11.957031 C8.230469,11.980469 8.246094,12 8.265625,12 L8.605469,12 C8.628906,12 8.640625,11.980469 8.640625,11.957031 L8.640625,9.039063 C8.640625,9.019531 8.625,9 8.605469,9 L8.265625,9 Z M14.199219,9 C13.957031,9 13.769531,9.066406 13.636719,9.203125 C13.503906,9.335938 13.410156,9.5625 13.363281,9.828125 L13.339844,10 L13.039063,10 C13.039063,10 13,10.011719 12.996094,10.050781 L12.945313,10.328125 C12.941406,10.351563 12.953125,10.371094 12.988281,10.371094 L13.28125,10.371094 L12.988281,12.003906 C12.964844,12.140625 12.9375,12.25 12.90625,12.332031 C12.878906,12.414063 12.851563,12.476563 12.816406,12.519531 C12.78125,12.566406 12.75,12.597656 12.695313,12.613281 C12.648438,12.628906 12.597656,12.636719 12.539063,12.636719 C12.507813,12.636719 12.464844,12.632813 12.433594,12.625 C12.402344,12.617188 12.386719,12.613281 12.359375,12.601563 C12.359375,12.601563 12.328125,12.589844 12.3125,12.625 C12.300781,12.652344 12.222656,12.867188 12.214844,12.890625 C12.207031,12.917969 12.21875,12.9375 12.234375,12.945313 C12.273438,12.960938 12.304688,12.96875 12.359375,12.980469 C12.429688,13 12.492188,13 12.546875,13 C12.671875,13 12.78125,12.980469 12.875,12.949219 C12.96875,12.914063 13.046875,12.859375 13.121094,12.78125 C13.195313,12.695313 13.246094,12.605469 13.292969,12.484375 C13.339844,12.363281 13.375,12.210938 13.40625,12.035156 L13.703125,10.371094 L14.140625,10.371094 C14.140625,10.371094 14.179688,10.371094 14.1875,10.328125 L14.234375,10.054688 C14.238281,10.027344 14.226563,10 14.191406,10 L13.769531,10 C13.773438,9.992188 13.800781,9.734375 13.851563,9.59375 C13.871094,9.535156 13.910156,9.484375 13.941406,9.453125 C13.976563,9.417969 14.015625,9.394531 14.054688,9.382813 C14.097656,9.371094 14.144531,9.363281 14.199219,9.363281 C14.238281,9.363281 14.277344,9.367188 14.308594,9.375 C14.347656,9.382813 14.363281,9.386719 14.375,9.390625 C14.417969,9.402344 14.421875,9.390625 14.433594,9.367188 L14.53125,9.09375 C14.542969,9.0625 14.519531,9.050781 14.511719,9.046875 C14.46875,9.03125 14.429688,9.023438 14.378906,9.015625 C14.328125,9.003906 14.265625,9 14.199219,9 Z M5.023438,10 C4.589844,10 4.289063,10.242188 4.289063,10.585938 L4.289063,10.59375 C4.289063,10.953125 4.621094,11.074219 4.933594,11.15625 L4.984375,11.171875 C5.210938,11.234375 5.40625,11.289063 5.40625,11.4375 L5.40625,11.441406 C5.40625,11.578125 5.277344,11.675781 5.074219,11.675781 C4.996094,11.675781 4.742188,11.675781 4.46875,11.515625 C4.433594,11.5 4.414063,11.488281 4.390625,11.472656 C4.375,11.464844 4.34375,11.453125 4.328125,11.492188 L4.234375,11.730469 C4.21875,11.765625 4.238281,11.773438 4.242188,11.78125 C4.289063,11.808594 4.332031,11.828125 4.375,11.851563 C4.609375,11.964844 4.832031,12 5.0625,12 C5.535156,12 5.828125,11.769531 5.828125,11.394531 L5.828125,11.390625 C5.828125,11.042969 5.496094,10.917969 5.1875,10.828125 L5.148438,10.816406 C4.914063,10.746094 4.710938,10.6875 4.710938,10.546875 L4.710938,10.535156 C4.710938,10.414063 4.828125,10.328125 5.011719,10.328125 C5.214844,10.328125 5.453125,10.386719 5.609375,10.46875 C5.609375,10.46875 5.65625,10.492188 5.671875,10.453125 C5.683594,10.429688 5.761719,10.234375 5.769531,10.214844 C5.777344,10.191406 5.761719,10.175781 5.746094,10.167969 C5.570313,10.066406 5.324219,10 5.070313,10 L5.023438,10 Z M6.988281,10 C6.886719,10 6.730469,10.011719 6.632813,10.03125 C6.632813,10.03125 6.339844,10.082031 6.21875,10.171875 C6.21875,10.171875 6.195313,10.183594 6.210938,10.21875 L6.304688,10.453125 C6.316406,10.484375 6.347656,10.472656 6.347656,10.472656 C6.347656,10.472656 6.355469,10.46875 6.367188,10.464844 C6.625,10.332031 6.949219,10.339844 6.949219,10.339844 C7.09375,10.339844 7.203125,10.363281 7.28125,10.417969 C7.351563,10.46875 7.390625,10.550781 7.390625,10.714844 L7.390625,10.765625 C7.277344,10.75 7.171875,10.738281 7.171875,10.738281 C7.117188,10.734375 7.046875,10.734375 6.960938,10.734375 C6.847656,10.734375 6.738281,10.746094 6.632813,10.773438 C6.527344,10.800781 6.433594,10.839844 6.355469,10.894531 C6.273438,10.949219 6.210938,11.015625 6.164063,11.097656 C6.113281,11.179688 6.089844,11.277344 6.089844,11.382813 C6.089844,11.492188 6.109375,11.585938 6.148438,11.664063 C6.191406,11.742188 6.25,11.808594 6.324219,11.859375 C6.398438,11.90625 6.492188,11.945313 6.59375,11.96875 C6.699219,11.988281 6.820313,12 6.949219,12 C7.085938,12 7.222656,11.988281 7.355469,11.96875 C7.488281,11.949219 7.644531,11.917969 7.691406,11.90625 C7.734375,11.898438 7.78125,11.886719 7.78125,11.886719 C7.816406,11.878906 7.8125,11.847656 7.8125,11.847656 L7.8125,10.71875 C7.8125,10.46875 7.742188,10.285156 7.601563,10.171875 C7.460938,10.058594 7.253906,10 6.988281,10 Z M9.992188,10 C9.824219,10 9.671875,10.023438 9.550781,10.078125 C9.429688,10.132813 9.324219,10.207031 9.242188,10.296875 C9.164063,10.386719 9.101563,10.496094 9.0625,10.617188 C9.023438,10.738281 9.007813,10.871094 9.007813,11.011719 C9.007813,11.15625 9.027344,11.289063 9.066406,11.40625 C9.105469,11.527344 9.171875,11.632813 9.257813,11.71875 C9.347656,11.808594 9.457031,11.878906 9.59375,11.925781 C9.726563,11.976563 9.890625,12 10.078125,12 C10.460938,12 10.664063,11.921875 10.75,11.875 C10.761719,11.867188 10.777344,11.855469 10.761719,11.816406 L10.671875,11.59375 C10.660156,11.558594 10.621094,11.570313 10.621094,11.570313 C10.523438,11.601563 10.390625,11.660156 10.074219,11.660156 C9.867188,11.660156 9.714844,11.605469 9.617188,11.515625 C9.519531,11.425781 9.472656,11.292969 9.460938,11.105469 L10.796875,11.105469 C10.796875,11.105469 10.832031,11.105469 10.835938,11.074219 C10.839844,11.058594 10.882813,10.816406 10.796875,10.539063 C10.765625,10.421875 10.679688,10.304688 10.625,10.25 C10.539063,10.164063 10.457031,10.105469 10.375,10.074219 C10.265625,10.027344 10.132813,10 9.992188,10 Z M11.890625,10 C11.460938,10 11.15625,10.242188 11.15625,10.585938 L11.15625,10.59375 C11.15625,10.953125 11.492188,11.074219 11.800781,11.15625 L11.855469,11.171875 C12.082031,11.234375 12.277344,11.289063 12.277344,11.4375 L12.277344,11.441406 C12.277344,11.578125 12.148438,11.675781 11.941406,11.675781 C11.863281,11.675781 11.609375,11.675781 11.335938,11.515625 C11.304688,11.5 11.28125,11.488281 11.257813,11.472656 C11.25,11.46875 11.210938,11.453125 11.195313,11.492188 L11.105469,11.730469 C11.089844,11.765625 11.109375,11.773438 11.113281,11.78125 C11.15625,11.808594 11.199219,11.828125 11.246094,11.851563 C11.480469,11.964844 11.699219,12 11.933594,12 C12.402344,12 12.699219,11.769531 12.699219,11.394531 L12.699219,11.390625 C12.699219,11.042969 12.367188,10.917969 12.058594,10.828125 L12.015625,10.816406 C11.78125,10.746094 11.578125,10.6875 11.578125,10.546875 L11.578125,10.535156 C11.578125,10.414063 11.699219,10.328125 11.878906,10.328125 C12.082031,10.328125 12.324219,10.386719 12.480469,10.46875 C12.480469,10.46875 12.527344,10.492188 12.542969,10.453125 C12.550781,10.429688 12.628906,10.234375 12.640625,10.214844 C12.648438,10.191406 12.632813,10.175781 12.613281,10.167969 C12.4375,10.066406 12.191406,10 11.9375,10 L11.890625,10 Z M15.160156,10 C15,10 14.855469,10.027344 14.734375,10.078125 C14.617188,10.128906 14.515625,10.203125 14.4375,10.292969 C14.355469,10.382813 14.292969,10.488281 14.253906,10.609375 C14.21875,10.730469 14.199219,10.863281 14.199219,11.003906 C14.199219,11.144531 14.21875,11.277344 14.253906,11.394531 C14.292969,11.515625 14.355469,11.625 14.4375,11.714844 C14.515625,11.800781 14.617188,11.875 14.738281,11.925781 C14.859375,11.976563 15,12 15.160156,12 C15.320313,12 15.460938,11.976563 15.582031,11.921875 C15.703125,11.871094 15.804688,11.800781 15.886719,11.710938 C15.964844,11.621094 16.027344,11.515625 16.0625,11.394531 C16.101563,11.273438 16.121094,11.140625 16.121094,11 C16.121094,10.863281 16.101563,10.730469 16.0625,10.609375 C16.027344,10.488281 15.964844,10.382813 15.886719,10.292969 C15.804688,10.203125 15.703125,10.128906 15.582031,10.078125 C15.460938,10.027344 15.320313,10 15.160156,10 Z M18.644531,10 C18.480469,10 18.332031,10.027344 18.203125,10.078125 C18.078125,10.128906 17.972656,10.203125 17.890625,10.292969 C17.804688,10.378906 17.738281,10.488281 17.699219,10.609375 C17.652344,10.726563 17.632813,10.863281 17.632813,11 C17.632813,11.304688 17.71875,11.550781 17.894531,11.730469 C18.070313,11.910156 18.328125,12 18.671875,12 C18.875,12 19.082031,11.960938 19.230469,11.90625 C19.230469,11.90625 19.257813,11.894531 19.246094,11.863281 L19.148438,11.617188 C19.136719,11.582031 19.097656,11.59375 19.097656,11.59375 C19.042969,11.617188 18.980469,11.632813 18.917969,11.640625 C18.851563,11.652344 18.777344,11.65625 18.699219,11.65625 C18.507813,11.65625 18.355469,11.605469 18.25,11.5 C18.140625,11.398438 18.078125,11.230469 18.078125,11 C18.082031,10.796875 18.132813,10.640625 18.230469,10.519531 C18.328125,10.402344 18.472656,10.34375 18.667969,10.34375 C18.828125,10.34375 18.953125,10.363281 19.082031,10.398438 C19.082031,10.398438 19.117188,10.410156 19.128906,10.375 C19.164063,10.285156 19.191406,10.222656 19.226563,10.125 C19.238281,10.09375 19.210938,10.082031 19.203125,10.078125 C19.148438,10.0625 19.03125,10.03125 18.9375,10.015625 C18.855469,10.003906 18.753906,10 18.644531,10 Z M20.277344,10 C20.113281,10 19.960938,10.023438 19.839844,10.078125 C19.714844,10.132813 19.613281,10.207031 19.53125,10.296875 C19.449219,10.386719 19.386719,10.496094 19.347656,10.617188 C19.3125,10.738281 19.292969,10.871094 19.292969,11.011719 C19.292969,11.15625 19.3125,11.289063 19.355469,11.40625 C19.394531,11.527344 19.457031,11.632813 19.546875,11.71875 C19.636719,11.808594 19.746094,11.878906 19.878906,11.925781 C20.015625,11.976563 20.179688,12 20.363281,12 C20.75,11.996094 20.953125,11.917969 21.035156,11.875 C21.050781,11.867188 21.066406,11.855469 21.046875,11.816406 L20.957031,11.589844 C20.945313,11.554688 20.90625,11.566406 20.90625,11.566406 C20.8125,11.601563 20.675781,11.660156 20.359375,11.660156 C20.15625,11.660156 20.003906,11.605469 19.90625,11.515625 C19.808594,11.425781 19.761719,11.292969 19.75,11.105469 L21.082031,11.105469 C21.082031,11.105469 21.117188,11.105469 21.125,11.074219 C21.125,11.058594 21.167969,10.816406 21.082031,10.539063 C21.050781,10.421875 20.964844,10.304688 20.910156,10.25 C20.824219,10.164063 20.742188,10.105469 20.660156,10.074219 C20.550781,10.027344 20.421875,10 20.277344,10 Z M17.386719,10 C17.214844,9.992188 17.121094,10.019531 17.039063,10.054688 C16.957031,10.089844 16.867188,10.148438 16.8125,10.214844 L16.8125,10.058594 C16.8125,10.035156 16.800781,10.019531 16.777344,10.019531 L16.4375,10.019531 C16.414063,10.019531 16.394531,10.035156 16.394531,10.058594 L16.394531,11.960938 C16.394531,11.980469 16.414063,12 16.4375,12 L16.785156,12 C16.808594,12 16.828125,11.980469 16.828125,11.960938 L16.828125,11.011719 C16.828125,10.882813 16.84375,10.753906 16.871094,10.671875 C16.898438,10.59375 16.9375,10.53125 16.988281,10.484375 C17.039063,10.441406 17.09375,10.410156 17.15625,10.390625 C17.214844,10.371094 17.285156,10.367188 17.332031,10.367188 C17.402344,10.367188 17.480469,10.386719 17.480469,10.386719 C17.503906,10.386719 17.519531,10.371094 17.527344,10.347656 C17.550781,10.292969 17.613281,10.117188 17.625,10.082031 C17.636719,10.054688 17.617188,10.039063 17.609375,10.035156 C17.585938,10.027344 17.472656,10.007813 17.386719,10 Z M9.957031,10.328125 C10.132813,10.328125 10.25,10.390625 10.332031,10.507813 C10.386719,10.585938 10.410156,10.683594 10.421875,10.796875 L9.46875,10.796875 C9.488281,10.679688 9.523438,10.585938 9.578125,10.507813 C9.65625,10.390625 9.78125,10.328125 9.957031,10.328125 Z M20.246094,10.328125 C20.421875,10.328125 20.535156,10.390625 20.621094,10.507813 C20.675781,10.585938 20.699219,10.683594 20.707031,10.796875 L19.757813,10.796875 C19.777344,10.679688 19.8125,10.585938 19.863281,10.507813 C19.945313,10.390625 20.070313,10.328125 20.246094,10.328125 Z M15.160156,10.335938 C15.335938,10.335938 15.460938,10.390625 15.542969,10.507813 C15.628906,10.625 15.671875,10.789063 15.671875,11 C15.671875,11.214844 15.628906,11.378906 15.546875,11.5 C15.460938,11.613281 15.335938,11.671875 15.160156,11.671875 C14.984375,11.671875 14.859375,11.613281 14.78125,11.5 C14.695313,11.378906 14.65625,11.214844 14.65625,11 C14.65625,10.789063 14.695313,10.625 14.777344,10.507813 C14.859375,10.394531 14.984375,10.335938 15.160156,10.335938 Z M7.027344,11.046875 C7.21875,11.050781 7.390625,11.078125 7.390625,11.078125 L7.390625,11.640625 C7.390625,11.640625 7.21875,11.671875 7.03125,11.683594 C6.757813,11.695313 6.636719,11.609375 6.640625,11.609375 C6.585938,11.570313 6.582031,11.558594 6.5625,11.535156 C6.535156,11.496094 6.523438,11.445313 6.523438,11.375 C6.523438,11.265625 6.5625,11.1875 6.640625,11.136719 C6.640625,11.136719 6.753906,11.042969 7.027344,11.046875 Z"/>
		</g>
	</g>
</svg>
  </div>
);

export default SalesforceIcon;


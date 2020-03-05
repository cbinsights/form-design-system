import React from 'react';
import { labelStyle } from 'components/util/storybook';

const typeStyle = {
    ...labelStyle,
    marginBottom: 0
}

export const Headers = () => (
  <>
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
    <h4>Heading4</h4>
    <h5>Heading5</h5>
    <h6>Heading6</h6>
  </>
)

export const Typesetting = () => (
  <>
    <div style={typeStyle}>type--head1</div>
    <div className="type--head1 margin--bottom--half">Sphinx of black quartz, judge my vow</div>
    <div style={typeStyle}>type--head2</div>
    <div className="type--head2 margin--bottom--half">Sphinx of black quartz, judge my vow</div>
    <div style={typeStyle}>type--head3</div>
    <div className="type--head3 margin--bottom--half">Sphinx of black quartz, judge my vow</div>
    <div style={typeStyle}>type--head4</div>
    <div className="type--head4 margin--bottom--half">Sphinx of black quartz, judge my vow</div>
    <div style={typeStyle}>type--big</div>
    <div className="type--big margin--bottom--half">Sphinx of black quartz, judge my vow</div>
    <div style={typeStyle}>type--data</div>
    <div className="type--data margin--bottom--half">Sphinx of black quartz, judge my vow</div>
    <div style={typeStyle}>type--caption</div>
    <div className="type--caption margin--bottom--half">Sphinx of black quartz, judge my vow</div>
    <div><span style={typeStyle}>type--link </span> (anchor)</div>
    <a className="type--link margin--bottom--half display--block" href="#">Go to Homepage</a>
  </>
);

export const InvertedTypesetting = () => (
  <>
    <div className="inverted padding--all bgColor--navy">
      <div style={typeStyle}>type--link</div>
      <a className="type--link">Go to Homepage</a>
    </div>
  </>
);
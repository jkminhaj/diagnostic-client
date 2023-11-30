import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const PDF = ({ testName  , report_status, date, name }) => {
  const primaryColor = '#3b82f6';
  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: 'white',
      padding: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: primaryColor,
    },
    block: {
      display: 'flex',
      flexDirection: 'row',
      gap: '10',
      marginBottom: 5,
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      color: primaryColor,
    },
    text: {
      fontSize: 14,
      marginBottom: 10,
    },
    border:{
      border:1,
      marginVertical:5,
      maxWidth:'50%'
    }
  });

  return (
    <Document>
      <Page size='A4'>
        <View style={styles.page}>
          <Text style={styles.title}>Blood Test</Text>
          <View style={styles.block}>
            <Text style={styles.label}>Full Name</Text>
            <Text style={styles.text}>{name}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.label}>Test Name</Text>
            <Text style={styles.text}>{testName}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.label}>Date</Text>
            <Text style={styles.text}>{date}</Text>
          </View>
          <View style={styles.block}>
            <Text style={styles.label}>Report Status</Text>
            <Text style={styles.text}>{report_status}</Text>
          </View>

        </View>
      </Page>
    </Document>
  );
};

export default PDF;

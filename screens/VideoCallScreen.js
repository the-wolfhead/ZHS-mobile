import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { RTCPeerConnection, RTCView, mediaDevices } from 'react-native-webrtc';

const App = () => {
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    const [peerConnection, setPeerConnection] = useState(null);

    const initializeLocalStream = async () => {
        const stream = await mediaDevices.getUserMedia({
            audio: true,
            video: true,
        });
        setLocalStream(stream);
        };
          
        const initializePeerConnection = () => {
            const pc = new RTCPeerConnection({
              iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
            });
          
            pc.onicecandidate = (event) => {
              if (event.candidate) {
                // Send candidate to the other peer
              }
            };
          
            pc.onaddstream = (event) => {
              setRemoteStream(event.stream);
            };
          
            if (localStream) {
              pc.addStream(localStream);
            }
          
            setPeerConnection(pc);
          };
        
        const createOffer = async () => {
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        
        // Send offer to the other peer
        };
          
        const handleIceCandidate = (candidate) => {
            peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
          };
        
          
        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'row' }}>
            {localStream && (
                <RTCView
                streamURL={localStream.toURL()}
                style={{ flex: 1, backgroundColor: 'black' }}
                />
            )}
            {remoteStream && (
                <RTCView
                streamURL={remoteStream.toURL()}
                style={{ flex: 1, backgroundColor: 'black' }}
                />
            )}
            </View>
            <Button title="Start Call" onPress={createOffer} />
        </View>
        );
  };

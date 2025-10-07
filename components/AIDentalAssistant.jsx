"use client";
import React, { useState } from 'react';
import { Bot, X, LoaderCircle } from 'lucide-react';

export default function AIDentalAssistant({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleQuery = async () => {
        if (!query.trim()) return;
        setIsLoading(true);
        setError('');
        setResponse('');

        const systemPrompt = `You are a helpful and friendly AI dental assistant for a dental clinic. Your role is to provide general, informative, and safe answers to common dental questions.

        **IMPORTANT RULES:**
        1.  **DO NOT PROVIDE MEDICAL ADVICE.** Never diagnose, treat, or give specific recommendations for individual dental problems.
        2.  **ALWAYS include a disclaimer.** Start or end every response with: "Please remember, this information is for educational purposes only. For any personal dental concerns, it's essential to consult with a qualified dentist."
        3.  Keep answers concise, easy to understand, and under 150 words.
        4.  Maintain a positive, reassuring, and professional tone.
        5.  If asked about specific products, recommend types (e.g., "a soft-bristled toothbrush") rather than brand names.
        6.  If the question is outside the scope of general dentistry, politely decline to answer.`;

        try {
            const apiKey = "AIzaSyC4w0d4OmezQyGBMvfy15G30e02HbgWPpg"; // Leave empty; will be handled by the environment
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            const payload = {
                contents: [{ parts: [{ text: query }] }],
                systemInstruction: { parts: [{ text: systemPrompt }] },
            };

            const res = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                throw new Error(`API error: ${res.statusText}`);
            }

            const result = await res.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
            
            if (text) {
                setResponse(text.replace(/\n/g, '<br />'));
            } else {
                throw new Error("No response from AI. Please try again.");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-white/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">

            <div className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-lg relative transform transition-all duration-300">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"><X size={24} /></button>
                <div className="flex items-center mb-4">
                    <Bot className="text-cyan-600 mr-3" size={30} />
                    <h2 className="text-2xl font-bold text-slate-800">AI Dental Assistant</h2>
                </div>
                <p className="text-slate-600 mb-4">Ask a general question about dental health, procedures, or hygiene.</p>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="e.g., How often should I floss?"
                        className="w-full px-4 py-2 border border-slate-700 rounded-md focus:ring-cyan-500 focus:border-cyan-500"
                        onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleQuery()}
                    />
                    <button onClick={handleQuery} disabled={isLoading} className="bg-cyan-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-700 disabled:bg-cyan-300 flex items-center justify-center">
                        {isLoading ? <LoaderCircle className="animate-spin" size={20} /> : 'Ask'}
                    </button>
                </div>
                <div className="mt-4 p-4 bg-slate-50 rounded-lg min-h-[150px] max-h-[300px] overflow-y-auto">
                    {isLoading && <p className="text-slate-500">Thinking...</p>}
                    {error && <p className="text-red-500">{error}</p>}
                    {response && <div className="text-slate-700" dangerouslySetInnerHTML={{ __html: response }} />}
                    {!response && !isLoading && !error && <p className="text-slate-400">Your answer will appear here.</p>}
                </div>
                 <p className="text-xs text-slate-400 mt-2 text-center">AI can make mistakes. This is not medical advice. <br /> Please book a consultation for serious issues.</p>
            </div>
        </div>
    );
}
